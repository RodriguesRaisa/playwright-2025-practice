import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://api.jquery.com/dblclick/#on1');
    let frameElement = page.frameLocator(`//div[@class='demo code-demo']/iframe`);
    await frameElement.getByText('Double click the block').dblclick();

    //another method of double click
    await frameElement.getByText('Double click the block').click({clickCount:2});
    
})();