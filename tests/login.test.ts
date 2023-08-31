import { chromium, expect, test } from "@playwright/test"
import { selectDropDownValue } from "./DropDown.test";

test("Login Test Demo", async({baseURL}) => {

    const browser = await chromium.launch(  {headless : false}  );
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto(`${baseURL}`);
    await page.hover("//a[@role='button']//span[contains(text(),'account')]");
    await page.click("'Login'");
    await page.fill("//input[@id='input-email']","dagarmayank");
    await page.fill("//input[@id='input-password']","india@1234");
    const messageField = page.locator("//input[@id='input-password']");
    expect(messageField.isVisible);
    const str = messageField.inputValue();
    await page.selectOption("",{label : ""});  
    await messageField.check();

    /** 
     * This is used to handle the Alert as listner
    */
    page.on("dialog", async(alert)=>{
          const str =  await alert.message();
            alert.accept("Mayank");
    })
    /**
     * To handle window in window
     * This Method perform the Array of command, So it is stored in Array
     */
    const [newWindow] = await Promise.all([
      page.waitForEvent("popup"),
      page.click("")
    ])

    await Promise.all([
      page.waitForNavigation({waitUntil : "networkidle"}),
      page.locator("").click()
    ])
})
 



