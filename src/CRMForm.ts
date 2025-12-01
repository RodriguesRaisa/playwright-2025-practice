import {Browser,chromium,firefox,webkit,Locator,Page,selectors, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://classic.freecrm.com/register/');
    
    
    //Page Locators
    let selectPaymentPlan:Locator = page.locator(`form#multipleForm select#payment_plan_id`);
    let emailId:Locator = page.locator(`input[name='email']`);
    let emailIdConfirm:Locator = page.locator(`input[name='email_confirm']`);
    let password:Locator = page.locator(`input[name='password']`);
    let passwordConfirm:Locator = page.locator(`input[name='passwordconfirm']`);

    //Page Placeholders
    let username:Locator = page.getByPlaceholder('Username');
    let firstName:Locator = page.getByPlaceholder('First Name');
    let lastName:Locator = page.getByPlaceholder('Last Name');



    //Enter value
    await selectOptionByValue(selectPaymentPlan,'1');
    await enterValueByPlaceholder(firstName,'New');
    await enterValueByPlaceholder(lastName,'User');
    await enterValue(emailId,'newuser@gmail.com');
    await enterValue(emailIdConfirm,'newuser@gmail.com');
    await enterValue(password,'Testlast@123');
    await enterValue(passwordConfirm,'Testlast@123');
    await enterValueByPlaceholder(username,'TestUser');

    await selectCheckBox(page,'checkbox','   I agree with the ');
    await buttonClick(page,'button','SUBMIT');

})();

async function enterValue(element:Locator,value:string){

    await element.fill(value);
}

async function enterValueByPlaceholder(element:Locator,value:string){

    await element.fill(value);

}

async function selectOptionByValue(element:Locator,value:string){

    await element.selectOption(value);

}

async function selectCheckBox(page:Page,role:'checkbox'|'radio',label:string){

    await page.getByRole(role,{name :label}).check();
}

async function buttonClick(page:Page,role:'button',label:string){

    await page.getByRole(role,{name :label}).click();
}