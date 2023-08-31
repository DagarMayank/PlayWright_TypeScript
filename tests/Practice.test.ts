import {test, Page} from "@playwright/test"

test("DropDown Value ", async({page}) =>{
   
    await page.goto("https://www.zomato.com/ncr/delivery-in-sector-110-noida?dishv2_id=68987");
    await new Promise(resolve => setTimeout(resolve, 5000));
    const loc =await page.locator("//div[contains(@class,'sc-cPuPxo gfWWFd')]//input[@placeholder]");
    await loc.type("Delhi")
    await new Promise(resolve => setTimeout(resolve, 5000));
    const locAddress = await page.locator("//div[@class='sc-iNovjJ ciqpK']/div");
    await loc.nth(0).click();

})