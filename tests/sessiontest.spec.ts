import {test,expect, Locator} from "@playwright/test";

//using the stored cookies/session

test.use({storageState:'auth/session.json'});

test('navigate to cart without login',async({page}) =>{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
  await page.waitForTimeout(5000);
});

//usecases
//sid,cookies,tokenID - forever,24hrs
//JWT,sessionId,tokenid

//wont work:
//otp
//oauth2.0
//2 factor authentication, multifactor authentication
//Recaptcha