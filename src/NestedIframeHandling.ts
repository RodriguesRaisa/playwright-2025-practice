import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://selectorshub.com/iframe-scenario');
    let frameElement1 = page.frameLocator(`//iframe[@id='pact1']`);
    let frameElement2 = frameElement1.frameLocator(`//iframe[@id='pact2']`);
    let frameElement3 = frameElement2.frameLocator(`//iframe[@id='pact3']`);

    await frameElement1.getByPlaceholder('First Crush').fill('Testing');
    await frameElement2.getByPlaceholder('Current Crush Name').fill('Automation');
    await frameElement3.getByPlaceholder('Destiny').fill('Automation');
    
   let headerText:string = await page.getByRole('heading',{name:'Memory Test'}).innerText();
   console.log(headerText);
})();