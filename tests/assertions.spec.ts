import {test,expect,Page,Locator} from '@playwright/test'

test('value assertions',async () =>{
    expect(1+1).toBe(2);
    expect('playwright').toContain('play');
    expect([1,2,3]).toEqual([1,2,4]);
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect(50).toBeGreaterThan(10);
    expect({role:'admin'}).toEqual({role:'admin'});
})

test('locator based assertions',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let header = page.getByText('Returning Customer',{exact:true});
    await expect(header).toBeVisible();
    await expect(header).toHaveText('Returning Customer',{timeout:10000});
    await expect(header).toContainText('Customer');
    let emailId = page.getByRole('textbox',{name:'E-mail Address'});
    await expect(emailId).toHaveAttribute('id','input-email');
    await expect(emailId).toHaveCSS('height','34px');
    let footerLinks = await page.locator('//footer//a');
    await expect(footerLinks).toHaveCount(16);
})

test('soft assertions',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let header = page.getByText('Returning Customer',{exact:true});
    await expect(header).toContainText('Customer');
})

test('not assertions',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.locator('#error')).not.toBeVisible();
})

test('screenshot assertions',async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
   let header =page.getByText('Returning Customer',{exact:true});
   await expect(header).toHaveScreenshot('header.png');
})

test('url and title assertions',async ({page}) =>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await expect(page).toHaveTitle('Account Login');
    await expect(page).toHaveURL('account/login');
})

test('element is visible enabled,disabled ',async ({page}) =>{
    await page.goto('https://classic.crmpro.com/');
    let chkBox = page.getByLabel('I agree with the terms and conditions.');
    await expect(chkBox).not.toBeChecked();

    let submitBtn = page.getByRole('button',{name:'SUBMIT'});
    await expect(submitBtn).toBeDisabled();  
    await expect(submitBtn).toBeVisible();  

    await chkBox.check();

    await expect(chkBox).toBeChecked();
    await expect(submitBtn).toBeEnabled();
    await expect(submitBtn).toBeVisible();

    //once assertions are done, browser will close by default
    //if you dont want browser to be closed , you can always pause the page
    await page.pause();//page will pause until you close the browser
})