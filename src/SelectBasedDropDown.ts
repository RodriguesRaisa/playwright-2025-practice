import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({ headless: false ,channel:'chrome'});
   let page:Page = await browser.newPage();


    await page.goto('https://www.nationalgeographic.com/expeditions/');

    page.waitForSelector('#destitinationSelection',{state:'visible'});
    let destinationVal:Locator = page.locator('#destitinationSelection');
    await destinationVal.selectOption({label:'Africa'});
    
    page.waitForSelector('#tripSelection',{state:'visible'});

    let tripVal:Locator = page.locator('#tripSelection');
    await tripVal.selectOption({label:'Around the World by Private Jet'});

    let nextBtn:Locator = page.getByRole('button',{name:'Next: Select A Departure'});
    nextBtn.waitFor({state:'visible'});
    nextBtn.click();

})();