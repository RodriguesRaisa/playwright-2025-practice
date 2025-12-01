import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://classic.crmpro.com/index.html');
    await page.getByPlaceholder('username').fill('TestRaisa');
    await page.getByPlaceholder('password').fill('Test@123');
    await page.getByRole('button',{name:'Login'}).click();

    let frameElement1:FrameLocator = page.frameLocator(`//iframe[@name='mainpanel']`);
    await frameElement1.getByTitle('Contacts').hover();
    

    await page.locator(`//select[@name='title']`).selectOption({value:'Miss'});
    
})();