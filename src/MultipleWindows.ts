import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let browserContext = await browser.newContext();
   let page:Page = await browserContext.newPage();


    await page.goto('https://naveenautomationlabs.com/');
    await page.waitForTimeout(1000);
    let parentWindowTitle = await page.title();
    
    await page.locator(`//a[contains(@class,'facebook')]`).scrollIntoViewIfNeeded();

    await page.locator(`//a[contains(@class,'facebook')]`).click();
    await page.locator(`//a[contains(@class,'youtube')]`).click();
     await page.waitForTimeout(1000);

    let allPages:Page[] = browserContext.pages();
    for(let pg of allPages)
    {
       let childWindowTitle = await pg.title();
       console.log(childWindowTitle);
       if(childWindowTitle != parentWindowTitle)
       {
        await pg.close();
       }
    }
     
    
})();