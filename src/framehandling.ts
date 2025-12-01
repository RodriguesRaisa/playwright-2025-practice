import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    // await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    // await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

    // //iframe will be loaded
    // let frameElement:FrameLocator = page.frameLocator(`//iframe[contains(@id,'frame-one')]`);
    // frameElement.locator(`//label[contains(text(),'Proposal title')]/following-sibling::input`).fill('Test Automation');
    
    // //capture text of page
    // let headerText:string = await page.getByRole('heading',{name:'Vehicle Registration Form',exact:true}).innerText();
    // console.log(headerText);

    //Example 2:
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let frameElement:FrameLocator= page.frameLocator(`[name='main']`);
    let titleText:string = await frameElement.locator(`//h2[text()='Title bar ']`).innerText();
    console.log(titleText);

    //print total number of frames
    let allFrames:Locator[] = await page.locator(`//frame`).all();
    console.log('Total number of frames are'+allFrames.length);
    for(let e of allFrames)
    {
        let frameNames = await e.getAttribute('name');
        let frameSrc = await e.getAttribute('src');
        console.log(frameNames+":"+frameSrc);

    }

    //Nested Frames
    
})();