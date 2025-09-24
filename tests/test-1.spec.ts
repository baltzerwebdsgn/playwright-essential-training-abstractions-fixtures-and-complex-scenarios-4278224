import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.getByTestId("nav-sign-in").click();
  await page.getByTestId("register-link").click();

  await page.getByTestId("first-name").fill("test");

  await page.getByTestId("last-name").fill("user");

  await page.getByTestId("dob").fill("2001-01-01");

  await page.getByTestId("street").fill("101 Testing Way");

  await page.getByTestId("postal_code").fill("55555");

  await page.getByTestId("city").fill("new york");

  await page.getByTestId("state").fill("new york");
  await page.getByTestId("country").selectOption("US");

  await page.getByTestId("phone").fill("5555555555");

  await page.getByTestId("email").fill("testlinkedinlearning0n1@test.com");

  await page.getByTestId("password").fill("hfuIrTn8$");

  await page.getByTestId("register-submit").click();
});
