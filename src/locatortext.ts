import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async ()=>{

    let browser:Browser = await chromium.launch({headless:false,channel : 'chrome'});
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   let header:string|null =await page.getByText('Register Account',{exact : true}).textContent();
    //textContent will give you text of the element + hidden text in the DOM
    console.log(header);

})();