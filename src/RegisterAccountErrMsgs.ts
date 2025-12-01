import {Browser,chromium,firefox,webkit,Locator,Page,selectors, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.locator(`input[name='agree']`).click();
    await page.getByRole('button',{name:'Continue'}).click();

    async function validateErrorMessage(field:string,expectMsg:string)
    {
        let errorMsg:string = await page.locator(`${field}+ div.text-danger`).innerText();
        if(errorMsg ===expectMsg)
        {
            console.log(`${field} error message is correct : ${errorMsg}`);
        }
        else{
            throw new Error(`${field} error message is incorrect : ${errorMsg}`)
        }
    }

    await validateErrorMessage('#input-firstname','First Name must be between 1 and 32 characters!');
    await validateErrorMessage('#input-lastname','Last Name must be between 1 and 32 characters!');
    await validateErrorMessage('#input-email','E-Mail Address does not appear to be valid!');
    await validateErrorMessage('#input-telephone','Telephone must be between 3 and 32 characters!');
    await validateErrorMessage('#input-password','Password must be between 4 and 20 characters!');

    await browser.close();
})();