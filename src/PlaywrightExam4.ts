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
    await page.locator(`//a[text()='Challenge 3']`).click();

    // //await page.locator(`//a[contains(@class,'dialog-close-button')]`).click();
    // await page.waitForTimeout(2000);
    // let speakersLit:string[] = await page.locator(`//div[@data-elementor-type='wp-page']//h6/a`).allInnerTexts();
    // console.log(speakersLit);



    const slider: Locator = page.locator(`//div[@class='twentytwenty-handle']`);

  // Wait until slider is visible
  await slider.waitFor();

  // Get the bounding box to know the slider’s position and size
  const box = await slider.boundingBox();
  if (!box) throw new Error("Slider bounding box not found!");

  // ---- Perform a mouse drag from right → left (to go to next slide)
  await page.mouse.move(box.x + box.width - 50, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 50, box.y + box.height / 2, { steps: 20 });
  await page.mouse.up();
  await page.waitForTimeout(1500);

  // ---- Perform drag left → right (to go back)
  await page.mouse.move(box.x + 50, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width - 50, box.y + box.height / 2, { steps: 20 });
  await page.mouse.up();
  await page.waitForTimeout(1500);

 

})();

