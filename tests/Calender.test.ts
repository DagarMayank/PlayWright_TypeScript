import { test } from "@playwright/test";

test("Calender", async({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await page.locator("//input[@placeholder='Start date']").click();
    await calender(page,"1 May 2008");
   
})




/**
 * This Function choose the date by clicking on the MonthsYears and Choosing from the table 
 * @param page 
 * @param Date 
 */
 export async function calender(page, Date: string)
 {
     /**
     * Enter the Date in beside given format : dd/mm/yyyy (4 May 2023)
     */
    //Date to be searched 
   let date = Date;  
   const splitted = date.split(" ");
   const inputYear = parseInt(splitted[2],10);

   //This is Calender Month shown on screen in Date Section
   const lblMonthHeader = await page.locator("//div[@class='datepicker-days']/table//tr/th[@class='datepicker-switch']");
 
    //Locator for the date 
    const selectday =await page.locator
        ("//div[@class='datepicker-days']//tbody/tr/td[@class='day' and text()='"+splitted[0]+"']");
   
    //This is locator of All Months calender
    const lblYearHeader = await page.locator
                ("//div[@class='datepicker-months']/table//tr/th[@class='datepicker-switch']");   
                let calenderMonth: string = "";
                calenderMonth = await lblYearHeader.textContent(); // Getting the text from location 
                const calenderMonthSplitted = calenderMonth.split(" "); //Spliting the Month and year
                const yeartobeSelected = parseInt(calenderMonthSplitted[1],10);
    //This is locator of selecting  Years Calender
    const selectYear = await page.locator
            ("//div[@class='datepicker-years']//tbody//td/span[contains(text(),'"+splitted[2]+"')]");
   
   //This locator of selecting the Months
   const selectMonth = await page.locator
            ("//div[@class='datepicker-months']//tbody//td/span[contains(text(),'"+splitted[1]+"')]");
    
   
    await  lblMonthHeader.click();//This Line will Navigate to Month Selection of calender
    
   //Previous Decade Button
   const prev = await page.locator("//div[@class='datepicker-years']//thead//th[@class='prev']");
   //Next Decade Button 
   const next = await page.locator("//div[@class='datepicker-years']//thead//th[@class='next']");
   
   
    if(splitted[2] != calenderMonthSplitted[1])
   {
        await  lblYearHeader.click();
        await page.waitForTimeout(2000);
        const locatorList: string[] = ["//div[@class='datepicker-years']//tbody//td/span[contains(text(),'')]"];
            for (const locator of locatorList) {
                const element = await page.locator(locator);
            }
        if( await selectYear.isVisible())
        {
           
            await page.waitForTimeout(5000);
            await  selectYear.click();
            await  selectMonth.click();
            await  selectday.click();
        }
        else
        {
            await page.waitForTimeout(5000);
                if(inputYear < yeartobeSelected)
                {
                     for(let i =0; i < 99; i++)
                     {
                        await page.waitForTimeout(3000);
                        await prev.click();
                        await page.waitForTimeout(5000);
                           
                        if(await selectYear.isVisible())
                            {
                               
                                    break;
                            }                           
                     }
                }
        }
   }

   else(splitted[2].match(calenderMonthSplitted[1]))
   {
    await  selectYear.click();
    await  selectMonth.click();
    await  selectday.click();
   }
}