import { Locator, Page } from "@playwright/test";

export default class Header_Navigation{
    readonly lbl_shopBycategory : Locator;
    readonly lbl_Home : Locator;
    lbl_Special : Locator;
    lbl_Blog : Locator;
    lbl_MyAccount : Locator;
    constructor(public page: Page){
        this.page = page;
       this.lbl_shopBycategory = page.locator("//div[@id='entry_217832']/a");
       this.lbl_Home = page.locator("//span[@class='title' and contains(text(),'Home')]");
       this.lbl_Special = page.locator("//span[@class='title' and contains(text(),'Special')]");
       this.lbl_Blog = page.locator("//*[@id='entry_217834']//*[contains(text(),'Blog')]");
       this.lbl_MyAccount = page.locator("//*[@id='entry_217834']//*[contains(text(),'My account')]"); 
    }

    async navigateToShopByCategory(){
        await this.lbl_shopBycategory.waitFor({state: "visible"});
        await this.lbl_shopBycategory.click({force : true});
        await this.lbl_MyAccount.waitFor({timeout : 3000});
    }

    async navigateToHome(){
        await this.lbl_Home.waitFor({state: "visible"});
        await this.lbl_Home.click();
    }
    async navigateToSpecial(){
        await this.lbl_Special.waitFor({state : "visible"})
        await this.lbl_Special.click();
    }
    async navigateToBlog(){
        await this.lbl_Blog.waitFor({state : "visible"})
        await this.lbl_Blog.click();
    }
    async navigateToMyAccount(){
        await this.page.waitForLoadState("networkidle");
        await this.lbl_MyAccount.click();
        
    }
}