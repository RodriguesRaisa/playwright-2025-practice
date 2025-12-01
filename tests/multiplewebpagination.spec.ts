import {test,expect,Page,Locator} from '@playwright/test'

test('multiple pagination',async ({page}) =>{
   test.slow();
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    let selectCheckboxes:Locator[]=await page.locator(`//td[contains(text(),'India')]/preceding-sibling::td/input[@type='checkbox']`).all();
    while(true)
    {
        if(selectCheckboxes.length>0)
        {
            for(let s of selectCheckboxes)
            {
                await s.click();
            }
        }

        let nextBtn:Locator = page.locator(`//button[contains(@class,'next')]`);
        if(await nextBtn.isDisabled() === true){
            console.log('Next button is disabled');
            break;
        }
        await nextBtn.click();
    }

})
