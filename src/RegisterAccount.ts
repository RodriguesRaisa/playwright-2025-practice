import {Browser,chromium,firefox,webkit,Locator,Page,selectors, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let header:string = await page.getByRole('heading',{name:'Register Account',level : 1}).innerText();
    console.log(header);
    let formHeader:string =await page.locator('legend',{hasText:'Your Personal Details'}).innerText();
    console.log(formHeader);
    await page.getByRole('textbox',{name:'First Name'}).fill('Test');
    await page.getByRole('textbox',{name:'Last Name'}).fill('AutoNew1');
    await page.getByRole('textbox',{name:'E-Mail'}).fill('testautonew1@gmail.com');
    await page.getByRole('textbox',{name:'Telephone'}).fill('6156007000');
    await page.locator(`input[name='password']`).fill('Testauto@123');
    await page.locator(`input[name='confirm']`).fill('Testauto@123');
    await page.getByRole('radio',{name:'Yes'}).check();
    await page.locator(`input[name='agree']`).click();
    await page.getByRole('button',{name:'Continue'}).click();
    let successMsg : string = await page.locator(`//div[@id='content']/h1`).innerText();
    if (successMsg === "Your Account Has Been Created!") 
    {
        console.log("Success message is correct: " + successMsg);
    } 
    else
    {
        throw new Error(`Success message is incorrect. Found: "${successMsg}"`);
    }
})();