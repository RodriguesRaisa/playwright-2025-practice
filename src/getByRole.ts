import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //to locate elements by their aria attributes
    //use label names only in case of textboxes and not for button
    await page.getByRole('textbox',{name:'First Name'}).fill('Raisa');
    await page.getByRole('textbox',{name:'Last Name'}).fill('Test');

    //for radio button
    await page.getByRole('radio',{name:'Yes'}).check();

    //if name is available for checkbox use getByRole else dont use getByRole
    await page.getByRole('checkbox').check();
    //for button use button names
    await page.getByRole('button',{name:'Continue'}).click();


})();