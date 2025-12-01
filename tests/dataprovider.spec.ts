import {test,expect} from '@playwright/test';

//Dataprovider means data parametrization
//Creating data source or array/csv 
//example to register 2-3 users , i need to add data for each user.
//Using multiple data for same test method

let loginData =
[{username:'pwtest@nal.com',password:'test123'},//0
    {username:'pwapp@nal.com',password:'test123'} //1
]

    for(let l of loginData){
        test(`login test for open cart for ${l.username} and ${l.password}`,async({page})=>{
            await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
            await page.getByRole('textbox',{name:'E-Mail Address'}).fill(l.username);
            await page.getByRole('textbox',{name:'Password'}).fill(l.password);
            await page.getByRole('button',{name:'Login'}).click();
            await expect(page).toHaveTitle('My Account');
        });
    }
