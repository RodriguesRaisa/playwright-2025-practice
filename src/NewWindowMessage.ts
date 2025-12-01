import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await firefox.launch({ headless: false });
   let page:Page = await browser.newPage();


    await page.goto('https://demoqa.com/browser-windows');
    await page.waitForTimeout(1000);
    

    let [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button',{name:'New Window Message'}).click()
    ])

    await page.waitForTimeout(1000);

    console.log(await newTab.url());
    let message:string = await newTab.locator('body').innerText();
    console.log(message);
    await newTab.close();

    await page.bringToFront();
    console.log(await page.url());
    

})();