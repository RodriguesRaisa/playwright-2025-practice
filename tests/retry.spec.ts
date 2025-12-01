import {test,expect,Page,Locator} from '@playwright/test';

test('title',async({page,browserName})=>{
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    await expect(page).toHaveTitle('Account Login11');
})