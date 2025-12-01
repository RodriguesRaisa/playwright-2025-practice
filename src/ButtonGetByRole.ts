import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    //await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'Continue'}).click();

    //button with input tag or button --> use getByRole as button
    //button with <a> tag --> use getByRole as link

    //incase of dropdown, use getByRole as combobox
    

})();