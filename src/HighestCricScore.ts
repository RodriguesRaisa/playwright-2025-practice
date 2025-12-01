import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    await page.goto('https://www.espncricinfo.com/series/icc-women-s-world-cup-2025-26-1478193/england-women-vs-pakistan-women-16th-match-1490428/full-scorecard'); 
    
    let allScores:string[] = await page.locator(`//th[contains(text(),'Batting')]/ancestor::thead[@class='ds-bg-fill-content-alternate ds-text-left']/following-sibling::tbody/tr//td[contains(@class,'ds-text-typo')]`).allInnerTexts();
    console.log(allScores);
    let allScoresValue :number[] = [];//empty array
    
   for(let i=0;i<allScores.length-1;i++)
   {
    allScoresValue.push((Number)(allScores[i]));//casting string array to number
   }
   console.log(allScoresValue);
   allScoresValue.sort((a,b)=>a-b);
    console.log(allScoresValue);
   console.log('Highest score is: '+allScoresValue[allScoresValue.length-1]);
   console.log('Second Highest score is: '+allScoresValue[allScoresValue.length-2]);
   console.log('Lowest score is: '+allScoresValue[0]);
})();