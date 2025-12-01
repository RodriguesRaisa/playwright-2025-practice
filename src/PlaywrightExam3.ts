import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

async function clickPara(languagePara:string,page:Page):Promise<string>{
    await page.locator(`//div[@id='${languagePara}']//i[@class='fa-accordion-icon fas fa-plus']`).click();
    await page.waitForTimeout(1000);
    let Para:string = await page.locator(`//div[@aria-labelledby='${languagePara}']/p`).innerText();
    return Para;

}

async function returnBackgroundColor(element:Locator):Promise<string>{
    let backgroundColor = await element.evaluate(ele=>getComputedStyle(ele).backgroundImage);
    return backgroundColor;
}

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();
    
    await page.goto('https://mockexam1cpsat.agiletestingalliance.org/');
    await page.getByRole('button',{name:'Close',exact:true}).click();
    await page.waitForTimeout(2000);
    await page.locator(`//li[contains(@class,'slideout-toggle')]/a[@href='#']`).click();
    await page.locator(`//a[text()='Challenge 1']`).click();

    await page.locator(`//a[contains(@class,'dialog-close-button')]`).click();
    await page.waitForTimeout(2000);
    // let plusIcons:Locator[] = await page.locator(`//i[contains(@class,'fa-plus')]`).all();
    // for(let p of plusIcons)
    // {
    //     await p.click();
    //     await page.waitForTimeout(1000);
    //     // console.log(await page.locator(`//div[contains(@class,'eael-accordion-content')]/p`).innerText());
    //       const visibleParagraph = page.locator(`//div[contains(@class,'eael-accordion-content')]/p`);

    // if (await visibleParagraph.isVisible()) {
    //   console.log(await visibleParagraph.innerText());
    // }
    // }

  let para:Locator = page.locator(`//div[@id='para1-tamil']`);
  console.log('Background before click:',await returnBackgroundColor(para));
  console.log(await clickPara("para1-tamil", page));
   console.log('Background after click:',await returnBackgroundColor(para)); 

  console.log(await clickPara("para2-hindi", page));
  console.log(await clickPara("para3-kannada", page));
  console.log(await clickPara("para-4-gujarati", page));
  console.log(await clickPara("para-5-french", page));

})();

