import {Browser,chromium,firefox,webkit,Locator,Page,selectors} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let rightPanelLinks : string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightPanelLinks.length);//13
    console.log(rightPanelLinks);//print

    //for each loop
    for(let e of rightPanelLinks){
        console.log(e);
        if(e === 'Forgotten Password')
        {
            await page.getByText(e).click();
            break;
        }
    }

    for(let i=0;i<rightPanelLinks.length;i++)
    {
        console.log(rightPanelLinks[i]);
    }

    //capture all footer links
    let footerLinks:Locator[]= await page.locator('footer a').all();//with all() capture all footer locators not actual text
    console.log(footerLinks.length);

    let allFooterLinks:string[] = [];//0
    for(let e of footerLinks)
    {
        //console.log(await e.innerText());//capture inner text
        //console.log(await e.getAttribute('href'));//capture href 

        let linkText:string = await e.innerText();
        allFooterLinks.push(linkText);
    }

    console.log(allFooterLinks.length);
    console.log(allFooterLinks);

// Use innerText() if you want what the user actually sees.

// Use allInnerTexts() if you want visible text from multiple elements.

// Use textContent() if you want raw text (including hidden/extra whitespace).
   
    
})();