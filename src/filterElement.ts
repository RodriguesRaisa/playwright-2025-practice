import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

//    //use case :1
//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

//     //get all footers : 16 
//     //out of 16 , capture that footer link where text=Privacy policy and click on it

//     //parent tag and indirect a
//     let footerElements :Locator = page.locator('footer a');
//     footerElements.filter({hasText:'Privacy Policy',visible:true}).click();

//usecase :2
//searchscenarios in Google search bar

    // await page.goto('https://www.google.com');
    // await page.locator(`[name='q']`).fill('selenium testing');
    // // await page.locator(`ul[role='listbox'] li div[role='option']`).filter({hasText:'java'}).click();
    // await page.locator(`//ul[@role='listbox']/li//div[@role='option']`).filter({hasText:'framework'}).click();

   
//usecase :3
//search scenario in flipkart
    // await page.goto('https://www.flipkart.com/');
    // await page.locator(`input[title='Search for Products, Brands and More']`).fill('macbook')
    // await page.locator(`//a[@class='oleBil']`).filter({hasText:'air m4'}).click();

//usecase: 4
    await page.goto('https://www.amazon.com/');
    await page.locator(`#twotabsearchtextbox`).fill('macbook');
    await page.locator(`//div[@role='row']`).filter({hasText:'air m4'}).click();
})();