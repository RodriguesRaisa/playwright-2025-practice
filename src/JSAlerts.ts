import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();
    
   //Add one event listener at the page level running in background and keep checking for JS popup
    //if popup is coming dismiss it immediately
    //use this listener the moment the page is initialised

    page.on('dialog',async dialog =>{
       console.log(dialog.message());
       //await dialog.accept('Raisa Rodrigues');
       await dialog.accept();
       //await dialog.dismiss();
       console.log(dialog.type());
    })

    //await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //await page.getByRole('button',{name:'Click for JS Alert'}).click();
    //await page.getByRole('button',{name:'Click for JS Confirm'}).click();
    //await page.getByRole('button',{name:'Click for JS Prompt'}).click();

    //three types of alerts:
    //1.JS Alert : Just plain popup with OK button and entire page
    //2.JS Confirm Alert : Popup with Are you sure you want to delete ? Cancel and OK buttons
    //3.JS Prompt Alert : Pop-up with textfield to enter value wit OK and Cancel buttons

    //How to identify JS alerts ? When popup appears entire page freezes

    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi/config/ma');
    await page.getByRole('button',{name:'Log In'}).click();
  
    
})();