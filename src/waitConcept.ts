import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator, expect} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 

   let page:Page = await browser.newPage();
   page.setDefaultTimeout(10000);

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register'); //parent window
    
    let firstName = page.getByRole('textbox',{name:'First Name'}); //no error thrown in case  of wrong locator
    //it will throw error only in case of actions are applied on those elements
    // await firstName.fill('testing');

    //pw follow this sequence:
    //dom loaded or not --> loaded on the page
    //visible on the page
    //stable on the page
    //element enabled or not

    //explicit wait
    firstName.waitFor({state:'visible',timeout:5000});
    firstName.fill('Raisa');

    //Wait for success message after filling the form
    await page.locator('#successmesg').waitFor({state:'visible',timeout:5000});

    //assertions in PW :default autowait
    expect(page.locator('#successmesg')).toBeVisible();

    //Interview question
    //waitFor --> locator librabry --> any kind of locators
    //waitForSelector --> page librabry --> only for xpath and css

    //wait for page loading
    page.waitForLoadState("load");//page is fully loaded
    page.waitForLoadState("domcontentloaded");//DOM is fully loaded

    //Better one is waitForLoadState("load")

    page.waitForLoadState("networkidle");//network api are done

    //dialog,popup
    page.waitForEvent('dialog');

    //wait for url
    page.waitForURL("url value");



})();