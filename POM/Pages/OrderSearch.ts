import { Locator, Page } from "@playwright/test";

export default class orderPlaced {
  searchBox: Locator;
  itemGrid: Locator;
  itemHoveredAddToCartButton: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.searchBox = page.locator(
      "//div[@id='entry_217822']//*[@name='search']"
    );
    this.itemGrid = page.locator("#entry_212469").locator("//a/div").nth(0);
    this.itemHoveredAddToCartButton = page
      .locator(".product-action > button")
      .first();
  }

  async searchForProduct() {
    await this.searchBox.fill("iMac");
    await this.searchBox.press("Enter");
  }
  async addItemToCart() {
    await this.itemGrid.hover({ timeout: 3000 });
    await this.page.waitForTimeout(5000);
    await this.itemHoveredAddToCartButton.hover({ timeout: 3000 });

    await this.itemHoveredAddToCartButton.waitFor({ state: "visible" });
    await this.itemHoveredAddToCartButton.click();
  }

  async selectProductCategory() {
    await this.page
      .locator(
        "//*[@id='entry_217822']//*[contains(@class,'btn dropdown-toggle')]"
      )
      .click();
    await this.page
      .locator("//div[contains(@class,' dropdown-menu-left ')]/a[text()]")
      .nth(4);
  }
}
