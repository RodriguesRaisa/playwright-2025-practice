import {expect, test} from "@playwright/test";


test('check your page title',async ({page})=>{
    await page.goto('https://www.google.com');
    let title:string =await page.title();
    console.log('Page title is: '+title);
    expect(title).toBe('Google');
})