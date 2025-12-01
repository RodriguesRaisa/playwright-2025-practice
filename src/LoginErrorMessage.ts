import {Browser,chromium,firefox,webkit,Locator,Page,selectors, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('textbox',{name:'E-Mail Address'}).fill('test@gmail.com');
    await page.getByRole('textbox',{name:'Password'}).fill('test@123');
    await page.getByRole('button',{name:'Login'}).click();
    let errorMsg : string = await page.locator(`div.alert.alert-danger.alert-dismissible`).innerText();
    if (errorMsg === " Warning: No match for E-Mail Address and/or Password.") 
    {
        console.log("Error message is correct: " + errorMsg);
    } 
    else
    {
        throw new Error(`Error message is incorrect. Found: "${errorMsg}"`);
    }
})();