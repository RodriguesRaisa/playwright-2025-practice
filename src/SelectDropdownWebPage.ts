import {Browser,chromium,firefox,webkit,Locator,Page,selectors, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/ui/selectdropdowns.html');
    let country:Locator = page.locator('#country');
    let experience:Locator = page.locator('#experience');
    let industry:Locator = page.locator('#industry');
    let projectsize:Locator = page.locator('#project-size');
    let communication:Locator = page.locator('#communication');
    let timezone:Locator = page.locator('#timez`one');

    selectOptionByValue(country,'uk');
    selectOptionByValue(experience,'intermediate');
    selectOptionByValue(industry,'healthcare');
    selectOptionByValue(projectsize,'small-team');
    selectOptionByValue(communication,'concise');
    selectOptionByValue(timezone,'pst');

})();

async function selectOptionByValue(element:Locator,value:string):Promise<void> {
    await element.selectOption(value);
    await expect(element).toHaveValue(value);
}

async function selectOptionByVisibleText(element:Locator,labelValue:string):Promise<void> {
    await element.selectOption({label:labelValue});
    //await expect(element).toHaveValue(value);//toHaveValue works only if you are value attribute
    let selectedValue = await element.inputValue();
    await expect(element).toHaveValue(selectedValue);
}

async function selectOptionByIndex(element:Locator,indexValue:number):Promise<void> {
    await element.selectOption({index:indexValue});
    //await expect(element).toHaveValue(value);//toHaveValue works only if you are value attribute
    let selectedValue = await element.inputValue();
    await expect(element).toHaveValue(selectedValue);
}