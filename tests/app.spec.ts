import {test,expect} from '@playwright/test';

test.describe('login feature',()=>{
//In beforeAll and afterAll only those parts related to non browser activity
    test.beforeAll(()=>{
        console.log('Check DB Connection and connect to DB');
    })

    test.beforeEach(async()=>{
      console.log('======Starting the test=============');
    });

    test.beforeEach(async({page})=>{
       await page.goto(`https://naveenautomationlabs.com/opencart/index.php?route=account/login`);
    });

    test.afterEach(async({page})=>{
        await page.close();
    })

    test.afterEach(async({page})=>{
        
        console.log('============Ending the test==============');
    })

    test.afterAll(()=>{
        console.log('Close DB Connection');
    })

    test('title test',async({page})=>{
         await expect(page).toHaveTitle('Account Login');
    }) 

})