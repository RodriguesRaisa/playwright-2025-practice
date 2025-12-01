import {test,expect, Locator} from '@playwright/test';

test('calendar test',async({page})=>{

    await page.goto(`https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html`);
    await page.locator(`//input[@id='datepicker']`).click();
    
    let expectedMonthYear  = "April 2026"
    while(true)
    {
        let currentMonthYear =await page.locator(`//div[@class='ui-datepicker-title']`).textContent();
        if(currentMonthYear?.replace(/\s+/g,' ') === expectedMonthYear)
       {
        let day:Locator = page.locator(`//a[@class='ui-state-default' and contains(text(),'16')]`);
        await day.click();
        break;
       }

       await page.locator(`//span[contains(text(),'Next')]`).click();
       

    }
})