import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();
    
    await page.goto('https://mockexam1cpsat.agiletestingalliance.org/');
    await page.getByRole('button',{name:'Close',exact:true}).click();
    await page.waitForTimeout(2000);
    await page.locator(`//li[contains(@class,'slideout-toggle')]/a[@href='#']`).click();
    let menuLabels:string[] = await page.locator(`//ul[@id='menu-slideout-spacious']/li/a`).allInnerTexts();
    
    for(let m of menuLabels)
    {
        console.log(m);
    }

    let socialMediaLinks:Locator[] = await page.locator(`//ul[@class='lsi-social-icons icon-set-lsi_widget-1']/li/a`).all();

    let allUrls:string[] = [];
    for(let s of socialMediaLinks)
    {
       let urls:string|null = await s.getAttribute('href');
       console.log(urls);
       if(urls) allUrls.push(urls);
    }
    console.log(allUrls);

 for (const url of allUrls) {
  const [newPage] = await Promise.all([
    //this is in parallel mode , hence cannot use await for each sentence below
    page.waitForEvent('popup'), // wait for new page
    page.evaluate((link) => window.open(link, '_blank'), url) // open in new window/tab
  ]);

  await newPage.waitForLoadState();
  console.log("New Window Title:", await newPage.title());
  await newPage.close(); // closes just the new window
}


})();