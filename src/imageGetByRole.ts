import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    
    //in case of img tag : use getByRole  --> name : --> alt attribute value
    await page.getByRole('img',{name:'naveenopencart'}).click();
    await page.getByRole('paragraph',{name:'Cushion cover, bedsheets & more'}).highlight();
   
    
    
})();