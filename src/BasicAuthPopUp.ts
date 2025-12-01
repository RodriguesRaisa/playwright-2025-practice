import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   // let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 

   //  let context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});

   // let page:Page = await context.newPage();

   //Simple Way
    // let username = 'admin';
    // let password = 'admin'
    // await page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);



    //Basic Auth : Username /Password with Cancel and SignIn buttons
   //In the url also we can provide username and password
   //But disadvantage is if password is password@123 then we cannot have 2 @ in the url

   // await page.goto(`https://the-internet.herokuapp.com/basic_auth`);

   let browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
   let context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
   let page:Page = await context.newPage();

   await page.goto('https://the-internet.herokuapp.com/basic_auth')
    

})();