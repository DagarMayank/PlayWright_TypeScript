import { Locator, Page } from "@playwright/test";

export default class login
{
    txt_UserName : Locator;
    txt_Password : Locator;
    btn_Login : Locator;
    
    constructor(public page: Page){
        this.page = page;
        this.txt_UserName = page.locator("//input[@id='input-email']");
        this.txt_Password = page.locator("//input[@id='input-password']");
        this.btn_Login = page.locator("//input[@type='submit']");
    }
     
   
    async loggedIN(userID : string,password : string){
        await this.txt_UserName.waitFor({state : "visible"});
        await this.txt_UserName.type(userID);
        await this.txt_Password.waitFor({state : "visible"});
        await this.txt_Password.type(password);
        await this.btn_Login.isEnabled({timeout : 3000});
        await this.btn_Login.click();
    }
}