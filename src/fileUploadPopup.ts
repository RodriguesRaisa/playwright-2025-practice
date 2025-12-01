import {Browser,chromium,firefox,webkit,Locator,Page,selectors, FrameLocator} from "@playwright/test";

(async () => {
   let browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
   let page:Page = await browser.newPage();

   //To automate this scenario for uploading file
   //type="file" attribute must be present in the DOM. If not present request developer to add it
    
    // await page.goto('https://practice.expandtesting.com/upload');//upload single file
    // await page.locator('#fileInput').setInputFiles('C:\\Users\\Raisa Rodrigues\\Downloads\\TestFileUpload.txt');
    // await page.locator('#fileSubmit').click();

    //upload multiple files:
    //To automate this scenario for multiple uploading file
   //type="file" attribute must be present in the DOM. If not present request developer to add it
   //also attribute 'multiple' must be present in DOM as well

//    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
//    await page.locator('#filesToUpload').setInputFiles(['C:\\Users\\Raisa Rodrigues\\Downloads\\TestFileUploadOne.txt','C:\\Users\\Raisa Rodrigues\\Downloads\\TestFileUploadTwo.txt']);

   //You can create file dynamically without having them in your workspace or in your local machine
   //It is useful for testcases when you dont want maintain the files

//    await page.goto('https://practice.expandtesting.com/upload');//upload single file
//    await page.locator('#fileInput').setInputFiles([{name:'resume.txt',mimeType:'text/plain',buffer:Buffer.from('Resume for test automation')}]);
//     await page.locator('#fileSubmit').click();

    //multiple file create and upload
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles([{name:'resume.txt',mimeType:'text/plain',buffer:Buffer.from('Resume for test automation')},{name:'drawio.png',mimeType:'image/png',buffer:Buffer.from('Image for test automation')}]);

    //Creating buffer memory

    //If type = file is not there :
    //AutoIT --> only windows--Worst option --> container , headless mode wont work
    //Sikuli -->Java based but wont work in Playwright/TS/JS
    //Robot -->Java based but wont work in Playwright/TS/JS . Only for windows
    //In that case, this testcase will be out of scope for automation
    
})();