import { test, Page, expect} from "@playwright/test";

const URL : string = "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo";
test.only("Alert Handling",async ({page}) => {
    await page.goto(URL);
    const ele = await page.locator("(//*[contains(@class,'btn-dark')])[3]");     
   await alertMessage(page);
   await ele.click();
    expect(await page.locator("#prompt-demo").textContent()).toContain("Heyaaa!!!")
})

async function alert(page) 
{
    page.on("dialog", async(alert)=>{
        console.log(await alert.message());
       await alert.dismiss();
    })
}

async function alertMessage(page) {
    page.on("dialog", async(alert)=> {
       const text = await alert.message();
        console.log(text);  
        await alert.accept("Heyaaa!!!!");
    })
}
