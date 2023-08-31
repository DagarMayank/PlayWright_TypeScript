//import { expect } from "@playwright/test";
import { test, verify } from "../Fixture/fixture";

test.use({
  browserName: "chromium",
});
test.describe("My Test ", () =>{ 
  test.beforeEach(
    async ({
      baseURL,
      headerNavigation,
      page,
      loginPage,
      userName,
      password,
    }) => {
      await page.goto(`${baseURL}`);
      await headerNavigation.navigateToMyAccount();
      await loginPage.loggedIN(userName, password);
      await verify(25).toBeGreaterThan(20);
      await page.waitForLoadState("load");
      await page.pause();
    }
  );
  test("Registration", async ({ registerPage, userName, password }) => {
    await registerPage.clickRegister();
    await registerPage.registerNewUser(
      "Ballu",
      "badmass",
      userName,
      "0123456789",
      password
    );
  });

  test("Login", async ({ orderPage, page }) => {
    await orderPage.selectProductCategory();
    await orderPage.searchForProduct();
    await page.pause();
    await orderPage.addItemToCart();
  });

  

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
