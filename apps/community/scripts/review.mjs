import { createClient } from "@supabase/supabase-js";
const args = process.argv.slice(2);
if (args.includes("--help")) {
  console.log(
    "Authenticated reviewer command: npm run review -- --event UUID --action verify|submit|approve|publish|withdraw|archive [--confirm-approve|--confirm-publish]. Requires SUPABASE_URL, SUPABASE_ANON_KEY, COMMUNITY_REVIEW_ACCESS_TOKEN. No service-role key is used. Approval and publication are separate commands.",
  );
  process.exit(0);
}
const option = (name) => args[args.indexOf(name) + 1];
const id = option("--event"),
  action = option("--action");
const targets = {
  submit: "READY_FOR_REVIEW",
  approve: "APPROVED",
  publish: "PUBLISHED",
  withdraw: "DRAFT",
  archive: "ARCHIVED",
};
if (
  !args.includes("--event") ||
  !/^[0-9a-f-]{36}$/i.test(id || "") ||
  !args.includes("--action") ||
  (!Object.hasOwn(targets, action) && action !== "verify")
)
  throw new Error("Specify --event UUID and a supported --action. See --help.");
if (
  ["approve", "publish"].includes(action) &&
  !args.includes(`--confirm-${action}`)
)
  throw new Error(`Explicit --confirm-${action} is required.`);
const {
  SUPABASE_URL: url,
  SUPABASE_ANON_KEY: key,
  COMMUNITY_REVIEW_ACCESS_TOKEN: token,
} = process.env;
if (!url || !key || !token)
  throw new Error(
    "Configure the URL, anon key and authenticated staff access token securely.",
  );
const client = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
  global: { headers: { Authorization: `Bearer ${token}` } },
});
const { data: identity, error: authError } = await client.auth.getUser(token);
if (authError || !identity.user)
  throw new Error("A valid authenticated staff session is required.");
const { data: event, error: readError } = await client
  .from("community_events")
  .select("id,state,updated_at")
  .eq("id", id)
  .single();
if (readError || !event)
  throw new Error("Event is unavailable to this account.");
const { data, error } = await client.rpc(
  action === "verify" ? "verify_community_event" : "transition_community_event",
  {
    event_id: id,
    expected_updated_at: event.updated_at,
    ...(action === "verify" ? {} : { target: targets[action] }),
  },
);
if (error)
  throw new Error(
    "Operation rejected by the database; verify permissions, verification, current state and record version.",
  );
console.log(
  `Explicit ${action} action completed for ${id}; state: ${data.state}.`,
);
