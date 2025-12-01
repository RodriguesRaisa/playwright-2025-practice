import {test,expect,Page,Locator} from '@playwright/test'

test('pagination',async ({page}) =>{
   
    await page.goto('https://selectorshub.com/xpath-practice-page/');

    while(true){
        let iseleExist:boolean = await page.locator(`//td[text()='Raisa']`).isVisible();
       
        if(iseleExist){
            console.log('ele is found...');
            let checkBox = page.locator(`//td[contains(text(),'Raisa')]//preceding-sibling::td/input[@type='checkbox']`);
            checkBox.click();
            break;
        }
   
        //click on next icon:pagination logic
        let nextBtn = page.getByRole('link',{name:'Next'});

        if((await nextBtn.getAttribute('aria-disabled'))==='true')
        {
            console.log('Reached last page - Next button disabled');
            break;
        }
          await nextBtn.click();
      
    }
})
