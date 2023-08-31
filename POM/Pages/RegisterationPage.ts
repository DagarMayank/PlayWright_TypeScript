import { Locator, Page } from "@playwright/test";

export default class Register {
  txt_firstName: Locator;
  txt_lastName: Locator;
  txt_email: Locator;
  txt_Telephone: Locator;
  txt_Password: Locator;
  txt_ConfirmPassword: Locator;
  chk_TermsCondition: Locator;
  btn_RegistrationContinue: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.txt_firstName = page.locator("//input[@id='input-firstname']");
    this.txt_lastName = page.locator("//input[@id='input-lastname']");
    this.txt_email = page.locator("//input[@id='input-email']");
    this.txt_Telephone = page.locator("//input[@id='input-telephone']");
    this.txt_Password = page.locator("//input[@id='input-password']");
    this.txt_ConfirmPassword = page.locator("//input[@id='input-confirm']");
    this.chk_TermsCondition = page.locator(
      "//label[@for='input-agree'][text()]"
    );
    this.btn_RegistrationContinue = page.locator("//input[@type='submit']");
  }

  async clickRegister() {
    await this.page.waitForTimeout(3000);
    await this.page.locator("//aside//a/i").nth(1).click();
  }
  
  async registerNewUser(
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    password: string
  ) {
    await this.txt_firstName.waitFor({ state: "visible" });
    await this.txt_firstName.type(firstName);
    await this.txt_lastName.waitFor({ state: "visible" });
    await this.txt_lastName.type(lastName);
    await this.txt_email.waitFor({ state: "visible" });
    await this.txt_email.type(email);
    await this.txt_Telephone.waitFor({ timeout: 3000 });
    await this.txt_Telephone.waitFor({ state: "visible" });
    await this.txt_Telephone.fill(telephone);
    await this.txt_Password.waitFor({ state: "visible" });
    await this.txt_Password.type(password);
    await this.txt_ConfirmPassword.waitFor({ state: "visible" });
    await this.txt_ConfirmPassword.type(password);
    await this.chk_TermsCondition.waitFor({ state: "visible" });
    await this.chk_TermsCondition.click();
    await this.btn_RegistrationContinue.waitFor({ state: "visible" });
    await this.btn_RegistrationContinue.click();
  }
}
