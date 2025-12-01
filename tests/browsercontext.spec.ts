import {test, Browser, chromium, Locator, Page,BrowserContext} from "@playwright/test";

test('check page title',async()=>{
    
    let browser:Browser = await chromium.launch({headless:false,channel:'chrome'});

    //creating multiple context with browser instance variable 
    //newContext method will not share cookies or session id with the other browser
    //two different users so context1 and context2

    //newContext means it will create new incognito browser
    let context1:BrowserContext =await browser.newContext();
    let context2:BrowserContext =await browser.newContext();
    let context3:BrowserContext = await browser.newContext()

    //using context we need to open page
    let page1:Page = await context1.newPage();
    let page2:Page = await context2.newPage();
    let page3:Page = await context3.newPage();

    //user1:admin
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page1.locator('#input-email').fill('march2024@open.com');
    await page1.locator('#input-password').fill('Selenium@12345');
    await page1.locator('//input[@value="Login"]').click();

    //user2:customer
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page2.locator('#input-email').fill('pwtest@play.com');
    await page2.locator('#input-password').fill('test@123');
    await page2.locator('//input[@value="Login"]').click();
    
    //user3:seller
    await page3.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page3.locator('#input-email').fill('seltest@gmail.com');
    await page3.locator('#input-password').fill('Seltest@123');
    await page3.locator('//input[@value="Login"]').click();


    await context1.close();
    await context2.close();
    await context3.close();

    
    // await page1.waitForTimeout(5000);
    // await page2.waitForTimeout(5000);
})