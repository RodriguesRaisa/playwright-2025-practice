import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://www.orangehrm.com/en/contact-sales');

    // //Handling cookie popup
    await page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`).click();

    // //1.scrollintoview

    // await page.locator(`//a[contains(text(),'Careers')]`).nth(2).scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
    // await page.locator(`//a[contains(text(),'Careers')]`).nth(2).click();

    //2.scroll down 1000 pixels:
    await page.evaluate(()=> window.scrollBy(0,1000));
    await page.waitForTimeout(2000);
    await page.evaluate(()=> window.scrollBy(0,2000));

    //3.scroll down to the bottom of the page
    await page.evaluate(()=> window.scrollBy(0,document.body.scrollHeight));
    await page.waitForTimeout(2000);

    //4.scroll up to top of the page
    await page.evaluate(()=>window.scrollBy(document.body.scrollHeight,0));
    await page.waitForTimeout(2000);
    
})();