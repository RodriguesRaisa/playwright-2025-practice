import {test,expect, Locator} from "@playwright/test";

test('store login session',async({page}) =>{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page.locator('#input-email').fill('march2024@open.com');
  await page.locator('#input-password').fill('Selenium@12345');
  await page.locator('//input[@value="Login"]').click();
  
  //kind of explicit wait in selenium
  await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

  //store cookies
  await page.context().storageState({path:'auth/session.json'});
});