import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    // await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    // let src =page.locator(`//div[@id='column-a']`);
    // let target = page.locator(`//div[@id='column-b']`);

    // await src.dragTo(target);
    // await expect(target).toContainText('A');

    await page.goto('https://jqueryui.com/droppable/');
    let frameElement = page.frameLocator(`//iframe[@class='demo-frame']`);
    let src = frameElement.locator(`//div[@id='draggable']`);
    let target = frameElement.locator(`//div[@id='droppable']`);
    await src.dragTo(target);
    await expect(target).toContainText('Dropped!');
    
})();