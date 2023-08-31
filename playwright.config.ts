import { PlaywrightTestConfig, devices } from '@playwright/test';
 const Config : PlaywrightTestConfig = {
  projects : [
    {
      name : "chrome",
      use : {
        ...devices["Desktop Chrome"]
      }
    }
  ],
  testMatch: ["POM/Tests/test1.test.ts"],
  use: {
    headless : false,
    screenshot : 'on',
    video:"on",
    baseURL : "https://ecommerce-playground.lambdatest.io/",
    launchOptions:{
      slowMo:1000
    }
  },
 reporter : [ ["dot"], ["json",{ 
  outputFile: "JsonReport/jsonReport.json"}],
             ["html",{open: 'always'} ]]
};
module.exports = Config

 


