import {test,expect, Locator} from "@playwright/test";
import {ElementUtil} from '../utils/ElementUtil.js'

test('login to app',async({page}) =>{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  
  let ele = new ElementUtil(page,10000);
//   ele.getElementLocator(`//input[@id='input-email']`).fill('test@gmail.com');
//   ele.getElementLocator(page.getByRole('textbox', { name: 'Password' })).fill('test@123');
//   ele.getElementLocator(`input[type="submit"][value="Login"]`).click();

    ele.fill(`//input[@id='input-email']`,'test@nal.com');
    ele.fill(page.getByRole('textbox', { name: 'Password' }),'test@123');
    ele.click(`input[type="submit"][value="Login"]`,{force:true,timeout:5000});

    
});