import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://www.orangehrm.com/en/contact-sales');

    await page.screenshot({path:'one.png'});
    await page.screenshot({path:'fullpage.png',fullPage:true});

    //If you wnat to create folder dynamically and save screenshots there
    await page.screenshot({path:'./screenshots/mypic.png'});
    
    await page.screenshot({
        path:'./screenshots/random.png',
        clip:{x:0,y:0,width:800,height:600}
    });

    // //Take only element screenshot
    let formElement:Locator = page.locator(`//form[@id='Form_getForm']`);
    await formElement.screenshot({path:'./screenshots/form.png'});

    //change format of screenshot and quality
    //By default format in playwright is png

    await page.screenshot({
        path:'./screenshots/random.jpg',
        type:'jpeg',
        quality:80, //0 to 100
        fullPage:true
    })
    
    //capture screenshot and use as temporary memory . No need to save
    let imageBuffer:Buffer = await page.screenshot(); //Return type is Buffer for empty screenshot method
    console.log(imageBuffer.length);//if length value is given as something that means file is created in buffer memory


})();