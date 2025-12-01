import {test,expect} from 'playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';

//import parser name parse coming from csv-parser dependency that we downloaded 

//creating customtype
//type/schema of reg data fields
//defining the columns
//password confirm password accept same data so we are defining column only once below

type regData = {
    firstName:string,
    lastName:string,
    telephone:string,
    password:string,
    subscribeNewsletter:string
}
//fs means filesystem object. you need to parse register.json file 
//parsing from JSON to object

//To read csv we need third party librabry npm install csv-parse

let fileContent = fs.readFileSync('./data/register.csv','utf-8');

let registrationData:regData[]= parse(fileContent,{
    columns:true,
    skip_empty_lines:true
});

for(let r of registrationData)
{
    test(`register user for ${r.firstName}`,async({page})=>{
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByRole('textbox', { name: 'First Name' }).fill(r.firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(r.lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill(getRandomEmail());
        await page.getByRole('textbox', { name: 'Telephone' }).fill(r.telephone);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(r.password);
        await page.getByRole('textbox', { name: 'Password Confirm' }).fill(r.password);

        if(r.subscribeNewsletter === 'Yes'){
            await page.getByRole('radio', { name: 'Yes', checked: false }).click();
        }
        else{
             await page.getByRole('radio', { name: 'No', checked: true }).click();
        }

        await page.locator('[name="agree"]').click();
        await page.getByRole('button', { name: 'Continue' }).click();

        await expect(page).toHaveTitle("Your Account Has Been Created!");
    })
}

function getRandomEmail():string{
let randomValue = Math.random().toString(36).substring(2,9);
return `auto_${randomValue}@gmail.com`;
}