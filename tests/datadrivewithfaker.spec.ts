import {test,expect} from 'playwright/test';
import {faker} from '@faker-js/faker';

    // test('Registration for single user',async({page})=>
    //     {
    //     const firstName = faker.person.firstName();
    //     const lastName = faker.person.lastName();
    //     const email = faker.internet.email({firstName:'auto'});
    //     const telephone = faker.phone.number({style:'national'});
    //     const password = faker.internet.password({length:20,memorable:true,pattern:/[A-Z]/,prefix:'Auto'});


    //     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    //     await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    //     await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    //     await page.getByRole('textbox', { name: 'E-Mail' }).fill(email);
    //     await page.getByRole('textbox', { name: 'Telephone' }).fill(telephone);
    //     await page.getByRole('textbox', { name: 'Password' }).first().fill(password);
    //     await page.getByRole('textbox', { name: 'Password Confirm' }).fill(password);
    //     await page.getByRole('radio', { name: 'Yes', checked: false }).click();
    //     await page.locator('[name="agree"]').click();
    //     await page.getByRole('button', { name: 'Continue' }).click();

    //     await expect(page).toHaveTitle("Your Account Has Been Created!");
    //     await page.pause();
    // });

//----------------------------------------//

    function generateUserData(){
        return{
         firstName : faker.person.firstName(),
         lastName : faker.person.lastName(),
         email : faker.internet.email({firstName:'auto'}),
         telephone : faker.phone.number({style:'national'}),
         password : faker.internet.password({length:20,memorable:true,pattern:/[A-Z]/,prefix:'Auto'})
        } ;
    }

//    test('Registration for single user',async({page})=>
//         {
//        let user = generateUserData();

//         await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//         await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
//         await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
//         await page.getByRole('textbox', { name: 'E-Mail' }).fill(user.email);
//         await page.getByRole('textbox', { name: 'Telephone' }).fill(user.telephone);
//         await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
//         await page.getByRole('textbox', { name: 'Password Confirm' }).fill(user.password);
//         await page.getByRole('radio', { name: 'Yes', checked: false }).click();
//         await page.locator('[name="agree"]').click();
//         await page.getByRole('button', { name: 'Continue' }).click();

//         await expect(page).toHaveTitle("Your Account Has Been Created!");
//         await page.pause();
//     });

let userCount = 3;
    for(let i=1;i<=userCount;i++)
    {
  
    test(`Registration for multiple user ${i}`,async({page})=>
        {     
        let userData = {
         firstName : faker.person.firstName(),
         lastName : faker.person.lastName(),
         email : faker.internet.email({firstName:'auto'}),
         telephone : faker.phone.number({style:'national'}),
         password : faker.internet.password({length:20,memorable:true,pattern:/[A-Z]/,prefix:'Auto'})
         }

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByRole('textbox', { name: 'First Name' }).fill(userData.firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(userData.lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill(userData.email);
        await page.getByRole('textbox', { name: 'Telephone' }).fill(userData.telephone);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(userData.password);
        await page.getByRole('textbox', { name: 'Password Confirm' }).fill(userData.password);
        await page.getByRole('radio', { name: 'Yes', checked: false }).click();
        await page.locator('[name="agree"]').click();
        await page.getByRole('button', { name: 'Continue' }).click();

        await expect(page).toHaveTitle("Your Account Has Been Created!");
        //await page.pause();
    });
}