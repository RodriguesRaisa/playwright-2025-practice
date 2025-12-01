import {test,expect, Locator} from "@playwright/test";

test('login to app',async({page}) =>{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  let emailId:Locator = await page.locator('#input-email');
  let password:Locator = await page.locator('#input-password');
  let loginBtn:Locator = await page.locator("[value='Login']");

  await emailId.fill('raisa.test@gmail.com');
  await password.fill('Trinity@123');
  await loginBtn.click();
  let pageTitle:string =await page.title();
  console.log('Home page title is '+pageTitle);

    await page.screenshot({path:'homepage.png'});

    expect(pageTitle).toEqual('My Account');

});