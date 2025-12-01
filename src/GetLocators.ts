import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();
//    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

//    //used when <img> tag is present with alttext
//     await page.getByAltText('naveenopencart').click();

//page.getByTestId used when there is data-testid attribute
//<input type="text" class="form-input" data-testid="username-input" placeholder="Enter your username" required="" fdprocessedid="p1ddv9">
    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
    await page.getByTestId('username-input').fill('Raisa');

    //page.getByTitle used when there is title attribute value
    await page.getByTitle('naveenopencart').click();

    //check placeholder value
    await page.getByPlaceholder('E-Mail Address').fill('test@gmail.com');

})();