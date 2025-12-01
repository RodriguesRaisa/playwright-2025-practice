import { Browser, chromium, Page } from "@playwright/test"

(async () => {

    let browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    let page:Page = await browser.newPage();
    // await page.goto('https://www.spicejet.com/');
    // await page.getByText('Add-ons',{exact:true}).hover();
    // await page.getByTestId('test-id-Taxi').click();

    await page.goto('https://www.ebay.com/');
    await page.getByRole('link',{name:'Clothing, Shoes & Accessories'}).hover();
    await page.getByAltText('Clothing, Shoes & Accessories').click();

})();