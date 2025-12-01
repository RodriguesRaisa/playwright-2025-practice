//if the link in the <a href> is accompanied with target='_blank' that means on clicking on link it will open a new window or tab

//Pseudo elements means are the special elements designed with pseudo classes e.g ::before ::after
//It is an element that has no property,no html tag and no attributes
//Its a styling element e.g font color , * mark for mandatory fields with color
//you need to capture it from usability point of view

import { Browser, chromium, Page } from "@playwright/test"

(async () => {

    let browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    let page:Page = await browser.newPage();

    //create our event listener for accept cookies button
    //background listener
    page.on('framenavigated',async ()=>{
        let cookiesButton = page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`);
        if(await cookiesButton.isVisible())
        {
            await cookiesButton.click();
        }
    })
  
    await page.goto('https://www.orangehrm.com/en/contact-sales');
    await page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`).click();

    await page.evaluate(()=>window.scrollBy(0,document.body.scrollHeight));
    await page.waitForTimeout(1000);


    //whenver a link is going to open in new window or tab
    //new window means pop-up
    //inside promise all you need parallel execution so dont put await

   let [newTab] = await Promise.all([
         page.waitForEvent('popup'),
         page.locator(`//a[contains(@href,'linkedin')]`).click() //open a new window -- a popup event will be triggered
    ])

    await page.waitForTimeout(4000);

    console.log(await newTab.title());
    console.log(newTab.url());

    //close the child window
   await newTab.close();

   //back to active parent window
   await page.bringToFront();

})();