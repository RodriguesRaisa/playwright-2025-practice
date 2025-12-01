import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    // await page.goto('https://selectorshub.com/xpath-practice-page/');

    // //#shadow-root open --> in your DOM, shadow root should always be open

    // await page.locator('#pizza').fill('Veg pizza');

    await page.goto('https://selectorshub.com/shadow-dom-in-iframe/');
    let frameElement = page.frameLocator(`//iframe[@class='entered lazyloaded']`);
    await frameElement.locator('#tea').fill('Yes i do');
    


})();