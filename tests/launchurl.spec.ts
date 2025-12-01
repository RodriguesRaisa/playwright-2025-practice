import {test,expect} from '@playwright/test';

test('check page title',async ({page})=>{
    //wait until page is completed loaded, then interact with other elements
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login',{waitUntil:'load'});

    page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login',{referer:'https://www.abc.com'});
    //If you want to go to amazon , to avoid amazon knowing that you are coming from competitor site, you can pass any dummy site in the refer to prevent it from knowing
    let title:string = await page.title();
    console.log('page title is: '+title);
});