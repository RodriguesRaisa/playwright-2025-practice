import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.locator('#input-firstname').focus();
    await page.locator('#input-firstname').pressSequentially('Testing',{delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('Automation',{delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type(getRandomEmail(),{delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('905757575757',{delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('testautom@123',{delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('testautom@123',{delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

})();

function getRandomEmail():string
{
    return `opencart`+Date.now().toString() + `@gmail.com`;
}