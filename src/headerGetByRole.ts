import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://www.freshworks.com/');
    
   let headerTitle:string = await page.getByRole('heading',{name:'Uncomplicate'}).innerText();
    console.log(headerTitle);

    //For paragraph
    //for span,div,p getByRole is not applicable, better to use xpath or css or page.getByText
    let para:string = await page.getByText('Freshworks provides').innerText();
    console.log(para);

    //h2-level 1 -6
    page.getByRole('heading',{name:'Uncomplicate',level : 2}).innerText();
})();