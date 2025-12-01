import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   
   let browserContext = await browser.newContext();

   let page:Page = await browserContext.newPage();

    //Create event listener for accept cookies button:
    page.on('framenavigated',async ()=>{
        let acceptCookiesButton = page.locator(`CybotCookiebotDialogBodyLevelButtonLevelOptionAllowAll`);
        if(await acceptCookiesButton.isVisible())
        {
            await acceptCookiesButton.click();
        }
    })

    await page.goto('https://www.orangehrm.com/en/contact-sales'); //parent window
    let orangeTitle = await page.title();

    await page.locator(`//a[contains(@href,'linkedin')]`).click();
    await page.locator(`//a[contains(@href,'facebook')]`).click();
    await page.locator(`//a[contains(@href,'youtube')]`).click();
    
    await page.waitForTimeout(3000);

  let allPages:Page[] =  browserContext.pages();//pages() it returns all the open pages in the context
  console.log(allPages.length);

  for(let pg of allPages)
  {
    console.log(await pg.title());
    if(await pg.title()!== orangeTitle){
        await pg.close();
    }
    
  }

  await page.bringToFront();
  console.log(await page.title());
  await page.getByRole('textbox',{name:'Full Name'}).fill('Raisa');
  
})();