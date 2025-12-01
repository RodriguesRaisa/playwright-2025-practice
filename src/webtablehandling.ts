import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

    //await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    await page.goto('https://www.espncricinfo.com/series/india-in-england-2025-1445348/england-vs-india-3rd-test-1448351/full-scorecard');


    let bowlingData:string[] = await page.locator(`//span[text()='1st Innings']/preceding-sibling::span[text()='England']/ancestor::div[contains(@class,'ds-flex ds-px-4')]/following-sibling::div[@class='ds-p-0']//span[contains(text(),'Jasprit Bumrah')]/ancestor::td//following-sibling::td[contains(@class,'ds-text-right') and not(contains(@class,'ds-hidden'))]`).allInnerTexts();
   console.log(bowlingData);
   

   //span[text()='1st Innings']/preceding-sibling::span[text()='England']/ancestor::div[contains(@class,'ds-flex ds-px-4')]/following-sibling::div[@class='ds-p-0']//span[contains(text(),'Jasprit Bumrah')]/ancestor::td//following-sibling::td[contains(@class,'ds-text-right')].allInnerTexts();
   //div//span[text()='England']/following-sibling::span[text()='1st Innings']
   //span[text()='1st Innings']/preceeding-sibling::span[text()='England']
    // let headerTitle : string = await page.getByRole('heading',{name:'Employee Management System',level:1}).innerText();
    // console.log(headerTitle);

    //to get header using css
   // await page.locator(`h1:text('Employee Management System')`)

    //Using xpath
    //td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']
    // await page.locator(`//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']`).click();
    // await page.locator(`//td[text()='John.Smith']/preceding-sibling::td/input[@type='checkbox']`).click();

    // await selectUser(page,'Joe.Root');
    // await selectUser(page,'John.Smith');

    //Using CSS selector
    // await page.locator(`tr:has(td:text('Joe Root'))`).locator('td').first().click();

    //await selectUserCSS(page,'Joe Root');

    //checking all checkboxes
    // let checkBoxes : Locator[] = await page.locator(`//tbody//input[@type='checkbox']`).all();
    // console.log(checkBoxes);
    // for(let c of checkBoxes)
    // {
    //     await c.check();
    // }
    
    // //uncheck all the checkboxes
    // for(let c of checkBoxes)
    // {
    //     await c.uncheck();
    // }

    //collect all the column data for Joe.Root
//    let userData:string[] = await getUserDetails(page,'Joe.Root');
//    console.log(userData);

})();

//creating utility function

//Page is an interface that provides methods to interact with the browser
// async function selectUser(page:Page,username:string):Promise<void>
// {
//     await page.locator(`//td[text()='${username}']/preceding-sibling::td/input[@type='checkbox']`).click();
// }

// async function selectUserCSS(page:Page,username:string):Promise<void>
// {
//     await page.locator(`tr:has(td:text('${username}'))`).locator('td').first().click();
// }

// async function getUserDetails(page:Page,username:string):Promise<string[]>{
//    return await page.locator(`//td[text()='${username}']/following-sibling::td`).allInnerTexts()
// }
