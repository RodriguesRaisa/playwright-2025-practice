import {Browser,chromium,firefox,webkit,Locator,Page,selectors, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://www.facebook.com/r.php?entry_point=login');
    let Day:Locator = page.locator('#day');
    let Month:Locator = page.locator('#month');
    let Year:Locator = page.locator('#year');

    //This below options will work for select based html tags

    //select by value attribute
    //await Day.selectOption({value:'5'});
    // await Month.selectOption('12');
    // await Year.selectOption('1990');

    selectOptionByValue(Day,'5');
    selectOptionByValue(Month,'12');
    selectOptionByValue(Year,'1990');

    await page.waitForTimeout(3000);

    //select by visibletext -->means by label
    // await Day.selectOption({label:'15'});
    // await Month.selectOption({label:'Dec'});
    // await Year.selectOption({label:'2020'});

    selectOptionByVisibleText(Day,'15');
    selectOptionByVisibleText(Month,'Dec');
    selectOptionByVisibleText(Year,'2020');

     await page.waitForTimeout(3000);

    //select by Index -->
    // await Day.selectOption({index:1});
    // await Month.selectOption({index:1});
    // await Year.selectOption({index:1});

    selectOptionByIndex(Day,1);
    selectOptionByIndex(Month,1);
    selectOptionByIndex(Year,1);

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