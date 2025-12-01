import {Browser, chromium, Locator, Page} from "@playwright/test";

//IIFE
(async () =>{
    let browser: Browser = await chromium.launch({headless:false});
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let title:string = await page.title()
    console.log('Page title is '+title);

    let url :string = page.url();
    console.log('Page url is'+url);

    let emailID : Locator = page.locator('#input-email')
    emailID.fill('naveen@gmail.com');
   
    await page.close();

})();