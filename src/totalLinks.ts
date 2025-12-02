import {Browser,chromium,firefox,webkit,Locator,Page} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

   await page.goto('https://www.geeksforgeeks.org/');
   let footerLinks:string[] = await page.locator(`div.footer-container_right a[href]`).allInnerTexts();
    console.log(footerLinks.length);
   for(let e of footerLinks)
   {
    console.log(e);
   }

    // await page.goto('https://www.flipkart.com/');
    // let allLinks:string[] = await page.locator('//a[@href]').allInnerTexts();
    // //let allLinks:string[] = await page.locator('a[href]').allInnerTexts();//using CSS selector

    // //if you want text of the elements use allInnertexts
    // console.log('Total number of links' +allLinks.length);

    // //total images
    // let allImages:Locator[] = await page.locator('//img[@alt]').all();
    // //all() will return all elements
    // console.log('Total number of links' +allImages.length);

    // for(let e of allImages)
    // {
    //     console.log(await e.getAttribute('alt'));
    // }

})();