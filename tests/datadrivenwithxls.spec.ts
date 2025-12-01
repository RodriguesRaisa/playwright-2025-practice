import {test,expect} from 'playwright/test';
import XLSX from 'xlsx';

const workbook = XLSX.readFile('./data/users.xlsx');
const sheet = workbook.Sheets['users'];

const users = XLSX.utils.sheet_to_json(sheet);

for(let [index,user] of users.entries())
{
     test(`Registration for user# ${index+1}`,async({page})=>
        {
            let{firstName,lastName,phone,password} = user as any
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill(getRandomEmail());
        await page.getByRole('textbox', { name: 'Telephone' }).fill(String(phone));
        await page.getByRole('textbox', { name: 'Password' }).first().fill(password);
        await page.getByRole('textbox', { name: 'Password Confirm' }).fill(password);
        await page.getByRole('radio', { name: 'Yes', checked: false }).click();
        await page.locator('[name="agree"]').click();
        await page.getByRole('button', { name: 'Continue' }).click();

        await expect(page).toHaveTitle("Your Account Has Been Created!");

   
 })
}

function getRandomEmail():string{
let randomValue = Math.random().toString(36).substring(2,9);
return `auto_${randomValue}@gmail.com`;
}