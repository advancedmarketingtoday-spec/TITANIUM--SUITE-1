import { test, expect } from "@playwright/test";
test("source-backed list, filters, calendar and detail", async ({
  page,
}, testInfo) => {
  await page.goto("/events");
  await expect(
    page.getByRole("heading", { name: "Explore events" }),
  ).toBeVisible();
  await expect(
    page.getByText("Development preview", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "2026 State of the City" }),
  ).toBeVisible();
  await page.getByLabel("Search events").fill("no matching event");
  await expect(
    page.getByRole("heading", { name: "No events to show yet" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await page.getByLabel("Category", { exact: true }).selectOption("Family");
  await expect(
    page.getByRole("heading", { name: "No events to show yet" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await page
    .getByLabel("School", { exact: true })
    .selectOption("Norco High School");
  await expect(
    page.getByRole("heading", { name: "No events to show yet" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await page.getByLabel("Sport", { exact: true }).selectOption("Football");
  await expect(
    page.getByRole("heading", { name: "No events to show yet" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  for (const period of ["Today", "This Weekend", "This Week", "This Month"]) {
    await page.getByRole("button", { name: period, exact: true }).click();
    await expect(
      page.getByRole("button", { name: period, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
  }
  await page.getByRole("button", { name: "Reset filters" }).click();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: `test-results/events-${testInfo.project.name}.png`,
    fullPage: true,
  });
  await page.getByRole("button", { name: "▦ Calendar" }).click();
  await expect(
    page.getByRole("button", { name: "Previous month" }),
  ).toBeVisible();
  // Navigate to the fixture month without depending on the execution host date.
  const target = 2026 * 12 + 9,
    now = new Date(),
    current =
      Number(
        new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          timeZone: "America/Los_Angeles",
        }).format(now),
      ) *
        12 +
      Number(
        new Intl.DateTimeFormat("en-US", {
          month: "numeric",
          timeZone: "America/Los_Angeles",
        }).format(now),
      ) -
      1;
  for (let i = 0; i < Math.abs(target - current); i++)
    await page
      .getByRole("button", {
        name: target > current ? "Next month" : "Previous month",
      })
      .click();
  await expect(
    page.getByRole("heading", { name: "October 2026" }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: `test-results/calendar-${testInfo.project.name}.png`,
    fullPage: true,
  });
  await page
    .getByRole("link", { name: "2026 State of the City", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "2026 State of the City", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("End time not confirmed", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Official event source" }),
  ).toHaveAttribute(
    "href",
    "https://community.coronaca.gov/coronaca_main/260156257",
  );
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(
    0,
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: `test-results/detail-${testInfo.project.name}.png`,
    fullPage: true,
  });
});
test("unknown events stay inaccessible and preview is not indexable", async ({
  page,
}) => {
  const response = await page.goto("/events/unknown");
  expect(response?.status()).toBe(404);
  expect(response?.headers()["x-robots-tag"]).toBe("noindex, nofollow");
  await expect(
    page.getByRole("heading", { name: "We couldn’t find that event." }),
  ).toBeVisible();
});
