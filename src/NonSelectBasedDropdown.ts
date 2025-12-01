import {Browser,chromium,firefox,webkit,Locator,Page,selectors, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    // await page.goto('https://naveenautomationlabs.com/opencart/ui/dropdowns.html');

    // await selectValue(page,'Choose your preferred programming language','JavaScript');
    // await selectValue(page,'Choose your preferred web framework','Angular');
    // await selectValue(page,'Select your database preference','MySQL');
    // await selectValue(page,'Select deployment platform','Microsoft Azure');
    // await selectValue(page,'Choose your code editor/IDE','Visual Studio Code');
    // await selectValue(page,'Select your experience level','Junior (2-3 years)');

    //Another example:
    await page.goto('https://react-select.com/home');
    //await selectDropdownValue(page,'Purple');
    await page.locator(`//div[contains(@class,'css-1dimb5e-singleValue')]/following-sibling::div[contains(@class,'select__input-container')]`).click();
    //await page.locator('.select__input-container').first().click();
    await page.getByRole('option',{name:'Purple'}).click();
   
 
})();

async function selectValue(page:Page,dropdownLabel:string,value:string):Promise<void>{
    await page.locator(`//span[text()='${dropdownLabel}']`).click();
    await page.getByText(value,{exact:true}).click();
}

async function selectDropdownValue(page:Page,value:string):Promise<void>{
    await page.locator(`//div[@class='select__input-container css-19bb58m']/preceding-sibling::div[@class='select__single-value css-1dimb5e-singleValue']`).click();
    await page.getByRole('option',{name:`${value}`}).click();
    }