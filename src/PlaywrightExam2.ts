import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();
    
    await page.goto('https://mockexam1cpsat.agiletestingalliance.org/');
    await page.getByRole('button',{name:'Close',exact:true}).click();
    await page.waitForTimeout(2000);
    await page.locator(`//li[contains(@class,'slideout-toggle')]/a[@href='#']`).click();
    await page.locator(`//a[text()='List of Participants']`).click();
    let filteredParticipants:string[] = await searchParticipantName('Sa',page);
    console.log(filteredParticipants);

    

    let participantDesignation:string[] = await page.locator(`//td[contains(@class,'ninja_clmn_nm_designation')]`).allInnerTexts();
    console.log(participantDesignation);
})();

async function searchParticipantName(searchText:string,page:Page):Promise<string[]>{
    await page.getByPlaceholder('Search').fill(searchText);
    await page.waitForTimeout(1000);
    let filteredParticipants:string[] = await page.locator(`//td[contains(@class,'ninja_clmn_nm_name')]`).allInnerTexts();
    return filteredParticipants;
}