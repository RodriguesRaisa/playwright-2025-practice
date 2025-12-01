//if you want to capture html code 

import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
   
   let htmlHeader:string =  await page.getByRole('heading',{name:'Register Account'}).innerHTML();
    console.log(htmlHeader);//if header tag doesnot have any child then you can use innerHTML

    //if the header is avialble , what are the different ways of capturing the text
    //innextText,textContent,innerHTML

})();