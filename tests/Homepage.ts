import {Locator, Page, test} from "@playwright/test"

export default class Homepage{

    firstname : Locator;
    lastname : Locator;
    
    constructor(public page: Page){
      this.page = page;
        this.firstname = page.locator("");
        this.lastname = page.locator("");
    }
async  enterFirstname(){
    await this.firstname.waitFor({state : "visible"});
    await this.firstname.click;
    
}
async enterlastname(){
    await this.lastname.waitFor({timeout : 3000});
    await this.lastname.click();
}


}