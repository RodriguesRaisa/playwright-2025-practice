import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('link',{name:'Forgotten Password'}).first().click();
    //in case of duplicate two links
    //use first() and last()
    //if more present
    //use index starting 0 , nth(0);
    
})();