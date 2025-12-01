import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

   //Right click is a context click. What do you mean by context menu ? It is right click menu
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.locator(`//span[@class='context-menu-one btn btn-neutral']`).click({button:'right'});
 
    let rightMenuList:string[] = await page.locator(`//ul[@class='context-menu-list context-menu-root']/li/span`).allInnerTexts();
    console.log(rightMenuList);
    await page.getByText('Edit',{exact:true}).click();
})();