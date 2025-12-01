//Pseudo elements means are the special elements designed with pseudo classes e.g ::before ::after
//It is an element that has no property,no html tag and no attributes
//Its a styling element e.g font color , * mark for mandatory fields with color
//you need to capture it from usability point of view

import { Browser, chromium, Page } from "@playwright/test"

(async () => {

    let browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    let page:Page = await browser.newPage();
  
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //evaluate method always invokes the Javascript
    let content = await page.evaluate(() =>{
        return window.getComputedStyle(
            document.querySelector('label[for="input-firstname"]')!,'::before')
            .getPropertyValue('content');
    });

    console.log(content);
    if(content.includes('*')){
        console.log('first name is mandatory field');
    }
})();