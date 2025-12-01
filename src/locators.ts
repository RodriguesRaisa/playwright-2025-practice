import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

   //find the element using locator and do the action
   //await page.locator('#input-email').fill('march2024@open.com');
//    await page.locator('#input-password').fill('Selenium@12345');
//    page.locator(`input[value='Login']`).click();

    // let email :Locator = page.locator('#input-email');
    // let password : Locator = page.locator('#input-password');
    // let loginBtn:Locator = page.locator(`input[value='Login']`);

    // await email.fill('march2024@open.com');
    // await password.fill('Selenium@12345');
    // await loginBtn.click();

    //Element that does not have id or css
    //But using nth method is not correct approach
    // let header: string | null = await page.getByText('My Account').nth(2).textContent();
    // console.log(header);

    // //using xpath
    // //h2[text()='My Account']
    // await page.locator(`//h2[text()='My Account']`).textContent();
    // console.log(header);

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    
    //using the element placeholder value
    await page.getByPlaceholder('First Name').highlight();
    await page.getByPlaceholder('First Name').fill('testing');
    await page.getByPlaceholder('Telephone').highlight();
    await page.getByPlaceholder('Telephone').fill('3634663636634');
    await page.locator('#input-lastname').pressSequentially('Automation',{delay : 200});
   
})();