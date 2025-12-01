import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://www.orangehrm.com/en/contact-sales');

    let contactSales:Locator = page.getByRole('button',{name:'Contact Sales'}).first();

    let bgColor = await contactSales.evaluate(ele => getComputedStyle(ele).backgroundColor);
    console.log(bgColor);

    //capture text color
    let textColor = await contactSales.evaluate(ele => getComputedStyle(ele).color);
    console.log(textColor);

    //to generate alert
    page.evaluate(()=>alert('Hello Raisa'));
})();