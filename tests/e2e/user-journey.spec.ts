import { test, expect } from "@playwright/test";

test.describe("Xanso Sanctuary Core User Journey (Discover → Assess → Choose → Join → Track)", () => {
  test("complete end-to-end mindful practice and concierge interaction flow", async ({
    page,
  }) => {
    // 1. DISCOVER: Navigate to the sanctuary landing
    await page.goto("/");
    await expect(page).toHaveTitle(/Xanso \| Premium Yoga & Wellness/i);

    // Verify serif hero headline and mindful primary CTA
    const heroHeadline = page.locator("h1");
    await expect(heroHeadline).toContainText("Find Your");
    await expect(heroHeadline).toContainText("Center");

    const startTrialBtn = page.getByRole("button", {
      name: /start free trial/i,
    });
    await expect(startTrialBtn.first()).toBeVisible();

    // 2. ASSESS: Open the AI Wellness Concierge chat window
    const conciergeFab = page.getByLabel("Open Wellness Concierge");
    await expect(conciergeFab).toBeVisible();
    await conciergeFab.click();

    // Verify Concierge Window expansion
    const conciergeHeader = page.getByText("Sanctuary Concierge");
    await expect(conciergeHeader).toBeVisible();

    // 3. INTERACT: Send inquiry for beginner Vinyasa flow
    const chatInput = page.getByPlaceholder(
      "Ask about flows, postures, or breath..."
    );
    await expect(chatInput).toBeVisible();
    await chatInput.fill("I need a beginner Vinyasa flow");
    await chatInput.press("Enter");

    // 4. VERIFY AI RESPONSE: Await streaming response
    await expect(page.getByText("Vinyasa")).toBeVisible({ timeout: 10000 });

    // Close the concierge window
    const closeBtn = page.getByLabel("Close Concierge");
    await closeBtn.click();

    // 5. CHOOSE & JOIN: Navigate to the Pricing Architecture section
    const pricingSection = page.locator("#pricing");
    await pricingSection.scrollIntoViewIfNeeded();
    await expect(pricingSection).toBeVisible();

    // Verify 3 tiers exist
    await expect(page.getByText("Group Practice")).toBeVisible();
    await expect(page.getByText("1:1 Yoga Therapy")).toBeVisible();
    await expect(page.getByText("Corporate Wellness")).toBeVisible();

    // Test Monthly / Annual Billing Toggle Switch
    const monthlyToggle = page.getByRole("button", { name: /billed monthly/i });
    const annualToggle = page.getByRole("button", { name: /billed annually/i });

    // Switch to Monthly and verify price changes
    await monthlyToggle.click();
    await expect(page.getByText("$89")).toBeVisible(); // 1:1 Therapy monthly price

    // Switch back to Annual (Save 20%)
    await annualToggle.click();
    await expect(page.getByText("$74")).toBeVisible(); // 1:1 Therapy annual discounted price

    // 6. TRACK: Navigate to authenticated Member Dashboard
    await page.goto("/dashboard");
    await expect(page.getByText("Welcome back,")).toBeVisible();
    await expect(page.getByText("18 Days")).toBeVisible(); // Gamified streak counter
    await expect(page.getByText("21-Day Spine & Alignment Journey")).toBeVisible();
    await expect(page.getByText("Upcoming Sanctuary Classes")).toBeVisible();
  });
});
