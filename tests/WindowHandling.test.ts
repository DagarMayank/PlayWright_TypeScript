import {test} from "@playwright/test";

test("Window Handle", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
   const btn =  await page.getByTitle("Follow @Lambdatesting on Twitter");
    const [newWindow]= await Promise.all([
         page.waitForEvent("popup"),
         page.locator("a[title='Follow @Lambdatesting on Twitter']").click()
    ]);

    await newWindow.locator("(//span[contains(text(),'Follow')])[1]").click();
    console.log(newWindow.url());
    
})

test.only("MultiWindowHandle", async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    const [multiwindow]= await Promise.all([
        page.waitForEvent("popup"),
        page.locator("#followall").click()
    ])

    const tabs = await multiwindow.context().pages(); // This Command return the Number of pages in the Window
    console.log("No of tabs:  "+ tabs.length);
/**
 *This is ForEach loop, in tabs we have stored all the multi pages 
 *Using the window we iterate over each and every window get their URL.
 */
    tabs.forEach(window =>{
        console.log("Window URL are:  "+window.url());
    })
})