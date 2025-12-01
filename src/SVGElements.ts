import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

 
    // await page.goto('https://www.flipkart.com/');

    // //Using CSS:
    // await page.getByPlaceholder(`[name='q']`).fill('macbook');
    // await page.locator(`button[title='Search for Products, Brands and More'] svg`).click();

    //Using Xpath:
    //*[name()='svg' and @fill='none']
    //*[local-name()='svg' and @fill='none']
    //*[name()='svg']//*[name()='g' and @id='regions']/*[name()='g' and @class='region']

    await page.goto('https://petdiseasealerts.org/forecast-map/#/',{waitUntil:'load'});
    await page.waitForTimeout(4000);

    let frameElement:FrameLocator = page.frameLocator(`//iframe[contains(@id,'map-instance')]`);
    let mapRegions:Locator[] = await frameElement.locator(`//*[local-name()='svg']//*[name()='g' and @id='regions']/*[name()='g']`).all(); 
    console.log(mapRegions.length);

    //print id of each region
    for(let e of mapRegions)
    {
        let box = await e.boundingBox();
        if(box){
            page.mouse.move(box.x+box.width/2,box.y+box.height/2);
             await page.waitForTimeout(1500);
        }
        //await e.hover();
        
        let mapNames:string|null = await e.getAttribute('id');
        console.log(mapNames);
    }
})();