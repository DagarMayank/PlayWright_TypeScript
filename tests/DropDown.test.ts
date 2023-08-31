import { test} from "@playwright/test";
const URL : string = "https://www.lambdatest.com/selenium-playground/select-dropdown-demo";

test("DropDown Menu", async({page}) => {
    await page.goto(URL);
    await selectDropDownValue(page,"Wednesday");    
});

/**
 * This Method is used to select the value in dropdown (Single Value)
 * @param page 
 * @param text 
 */
export async function selectDropDownValue(page, text : string) { 
    const dropDownID : string = "#select-demo";
    await page.selectOption(dropDownID,{
        label : text
    });
    await page.waitForTimeout(5000);
   }
