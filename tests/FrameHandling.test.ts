import { test } from "@playwright/test";
/**
 * this is using the page.frame() method , finding locator and filling up the details 
 */
test("Iframe Handling ", async({page})=>{
    await page.goto("https://letcode.in/frame");
    const allframe = await page.frames();
    console.log("No. of Frames are: "+allframe.length)

   const frame1 = await page.frame("firstFr");
    await frame1?.locator("//input[@name='fname']").type("Mayank");
    await frame1?.locator("//input[@name='lname']").type("Dagar");

    await page.waitForTimeout(5000);
    
})
/**
 * This is using page.FrameLocator() method
 */
test("Nested Frame",async({page})=>{
    page.goto("https://letcode.in/frame");
    const frame = await page.frameLocator("#firstFr");
    await frame.locator("//input[@name='fname']").type("Mayank");
    await frame.locator("//input[@name='lname']").type("Dagar");
    await page.waitForTimeout(5000);
    const innerFrame = await frame.frameLocator("//iframe[@src='innerFrame']");
    await innerFrame.locator("//input[@name='email']").type("BalluBadmass@gmail.com");
})