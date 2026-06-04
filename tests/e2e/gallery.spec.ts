import { test, expect } from "@playwright/test"

test("gallery renders all demos with no console errors", async ({ page }) => {
  const errors: string[] = []
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()))
  page.on("pageerror", (e) => errors.push(e.message))
  await page.goto("/")
  await expect(page.getByTestId("gallery")).toBeVisible()
  // every demo section mounted
  const sections = page.locator('[data-testid^="demo-"]')
  expect(await sections.count()).toBeGreaterThanOrEqual(15)
  expect(errors, errors.join("\n")).toEqual([])
})

test("button press and dialog open interaction", async ({ page }) => {
  await page.goto("/")
  await page.getByTestId("demo-dialog").getByText("open").first().click()
  await expect(page.getByText("deploy?")).toBeVisible()
})

test("visual snapshot of the gallery", async ({ page }) => {
  await page.goto("/")
  await page.waitForTimeout(500) // allow fonts
  await expect(page).toHaveScreenshot("gallery.png", { fullPage: true, maxDiffPixelRatio: 0.02 })
})
