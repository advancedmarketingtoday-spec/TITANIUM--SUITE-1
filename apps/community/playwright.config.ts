import { defineConfig } from "@playwright/test";
const port = Number(process.env.COMMUNITY_E2E_PORT || 3010);
if (!Number.isInteger(port) || port < 1024 || port > 65535)
  throw new Error("Invalid local browser-test port");
export default defineConfig({
  testDir: "./e2e",
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    launchOptions: {
      executablePath:
        process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || "/usr/bin/chromium",
    },
  },
  webServer: {
    command: `npm run build && COMMUNITY_PREVIEW=true COMMUNITY_ENVIRONMENT=development npm run start -- --port ${port}`,
    url: `http://127.0.0.1:${port}/events`,
    reuseExistingServer: false,
    timeout: 120000,
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
    { name: "mobile", use: { viewport: { width: 390, height: 844 } } },
  ],
});
