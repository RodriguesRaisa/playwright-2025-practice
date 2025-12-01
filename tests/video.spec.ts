import {Browser, BrowserContext, chromium, expect, Page, test} from "@playwright/test";

let browser:Browser;
let context:BrowserContext;
let page:Page;

test('testtwo',async ({page})=>{

    browser = await chromium.launch({channel:'chrome',headless:false});

    context = await browser.newContext({
        recordVideo:{
            dir:'videos/',
            size:{width:800,height:600},
        }
    })
    page = await context.newPage();

    await page.goto('https://www.orangehrm.com/en/contact-sales');

});