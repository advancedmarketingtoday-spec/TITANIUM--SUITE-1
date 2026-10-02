import { execFileSync } from "node:child_process";
const name = "corona-phase1-postgres";
const image =
  "postgres:17-alpine@sha256:b0f9560a2de083e2cc7382e75f808c7381a32852a7ec49117deedb300e552b24";
let existing;
try {
  existing = JSON.parse(
    execFileSync("docker", ["inspect", name], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }),
  )[0];
} catch {}
if (existing) {
  if (existing.Config.Labels?.["corona.phase1.test"] !== "true")
    throw new Error(
      "Refusing to reuse an unmarked container; inspect it manually.",
    );
  execFileSync("docker", ["start", name], { stdio: "inherit" });
} else {
  execFileSync(
    "docker",
    [
      "run",
      "--name",
      name,
      "--label",
      "corona.phase1.test=true",
      "-e",
      "POSTGRES_HOST_AUTH_METHOD=trust",
      "-e",
      "POSTGRES_DB=corona_phase1_test",
      "-p",
      "127.0.0.1:55432:5432",
      "-d",
      image,
    ],
    { stdio: "inherit" },
  );
}
for (let attempt = 0; attempt < 30; attempt++) {
  try {
    execFileSync(
      "docker",
      [
        "exec",
        name,
        "pg_isready",
        "-U",
        "postgres",
        "-d",
        "corona_phase1_test",
      ],
      { stdio: "ignore" },
    );
    console.log("Disposable local test database ready.");
    process.exit(0);
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}
throw new Error("Local PostgreSQL did not become ready.");
