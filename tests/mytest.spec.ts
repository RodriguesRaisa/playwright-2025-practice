import {test,expect} from '@playwright/test';

test('title test',async({page,browserName})=>{
    test.skip(browserName ==='firefox','Feature is not supported in Firefox');
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    await expect(page).toHaveTitle('Account Login');
});

test('url test',async({page})=>{
      await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
      await expect(page).toHaveURL('/.*account\/login.*/');
});

test.skip('header is visible',async({page})=>{
      await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
      await expect(page.getByText('Returning Customer',{exact:true})).toBeVisible();
});

test.fixme('password is visible',async({page})=>{
      await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
      await expect(page.getByRole('textbox',{name:'Password'})).toBeVisible();
});

test.skip('new customer header is visible',async({page})=>{
      test.fail(); //Expected to fail. For testing negative testing
      await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
      await expect(page.getByText('New Customer11',{exact:true})).toBeVisible();
});