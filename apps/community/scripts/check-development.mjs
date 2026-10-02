import { createClient } from "@supabase/supabase-js";
import { previewConfiguration } from "../src/lib/preview-config.ts";
const config = previewConfiguration(process.env);
if (!config.allowed || config.mode !== "database")
  throw new Error(
    "Supply confirmed development-only database preview configuration.",
  );
const {
  SUPABASE_URL: url,
  SUPABASE_ANON_KEY: key,
  COMMUNITY_PREVIEW_EMAIL: email,
  COMMUNITY_PREVIEW_PASSWORD: password,
} = process.env;
if (!url || !key || !email || !password)
  throw new Error(
    "Development connection and read-only preview account must be configured securely.",
  );
const options = { auth: { persistSession: false, autoRefreshToken: false } };
const anonymous = createClient(url, key, options),
  reader = createClient(url, key, options);
function check(condition, message) {
  if (!condition) throw new Error(message);
  console.log("PASS:", message);
}
const { data: login, error: loginError } = await reader.auth.signInWithPassword(
  { email, password },
);
check(!loginError && !!login.user, "Preview reader authentication");
const { data: member, error: memberError } = await reader
  .from("community_members")
  .select("role")
  .eq("user_id", login.user.id)
  .single();
check(
  !memberError && member?.role === "previewer",
  "Dedicated read-only previewer role",
);
const { data: records, error: recordsError } = await reader
  .from("community_events")
  .select("*")
  .eq("is_development", true);
check(
  !recordsError &&
    records?.length > 0 &&
    records.every(
      (e) =>
        ["DRAFT", "VERIFIED"].includes(e.state) &&
        e.source_url &&
        e.verified_at &&
        e.development_label &&
        !e.published_at,
    ),
  "Labeled unpublished source-backed development records",
);
const { data: visible, error: publicError } = await anonymous
  .from("community_events")
  .select("id")
  .eq("is_development", true);
check(
  !publicError && visible?.length === 0,
  "Anonymous queries hide development records",
);
const event = records[0];
for (const target of ["APPROVED", "PUBLISHED"]) {
  const { error } = await anonymous.rpc("transition_community_event", {
    event_id: event.id,
    target,
    expected_updated_at: event.updated_at,
  });
  check(!!error, `Anonymous ${target} action rejected`);
  const { error: readerError } = await reader.rpc(
    "transition_community_event",
    { event_id: event.id, target, expected_updated_at: event.updated_at },
  );
  check(!!readerError, `Preview reader ${target} action rejected`);
}
const { data: changed, error: editError } = await reader
  .from("community_events")
  .update({ description: event.description })
  .eq("id", event.id)
  .select("id");
check(
  !!editError || changed?.length === 0,
  "Read-only previewer edit rejected (unchanged description used)",
);
const { error: privateError } = await reader
  .schema("private_fitness")
  .from("isolation_test_sentinel")
  .select("*");
check(
  privateError?.code === "PGRST106",
  "Private fitness schema excluded from exposed API schemas",
);
console.log(
  "Development API checks completed without approving or publishing content.",
);
