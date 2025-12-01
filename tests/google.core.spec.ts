import {Browser, chromium, Locator, Page} from "@playwright/test";


//Standalone script 
//use command --> npx tsx tests/google.core.spec.ts

//IIFE
(async () =>{
    let browser: Browser = await chromium.launch(
        {
            headless:false,
            channel:'chrome',
            //executablePath: 
        });
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let title:string = await page.title()
    console.log('Page title is '+title);

    let url :string = page.url();
    console.log('Page url is'+url);

    let emailID : Locator = page.locator('#input-email');
    await emailID.fill('naveen@gmail.com');
   
    await browser.close();

})();