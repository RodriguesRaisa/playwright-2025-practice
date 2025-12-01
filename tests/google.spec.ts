//spec means testcases

//1. with test() block:
//use command --> npx playwright test tests/google.core.spec.ts --headed

import { test, expect } from '@playwright/test';
//importing test() from another class file, hence {test}

//There is fixtures in test.d.ts, it is an object containing properties like:
// {
//   page: Page,          // a browser tab
//   context: BrowserContext,
//   browser: Browser,
//   request: APIRequestContext,
//   ...
// }

//Instead of writing:

// async (fixtures) => {
//     const page = fixtures.page;
// }

//You can use object destructuring to pull out page directly:
//This is called parameter destructuring. It makes the code cleaner and avoids writing fixtures.page everywhere.


test('check page title',async({page})=>{
    await page.goto('https://www.google.com');//Since this method is returning promise, we are using await
    //because of await , the arrow function will be asyn function

    let title:string = await page.title();
    console.log('Page title is'+title);
    expect(title).toBe('HGooglee');
})

//async tells JavaScript/TypeScript that this function will perform asynchronous operations (things that take time, like network requests) and that it will return a Promise.

//operations like page.goto() and page.title() are asynchronous because they involve network communication and browser actions.

//Inside an async function, you can use await to pause execution until a Promise resolves.