import {Page,Locator,expect} from '@playwright/test';

type flexibleLocator = string|Locator;

export class ElementUtil{
    private page:Page;
    private defaultTimeOut:number =3000;

    constructor(page:Page,timeOut:number=3000){
        this.page = page;
        this.defaultTimeOut = timeOut;
    }

    //await page.locator(`#email`).fill('test@gmail.com')
    // await page.getByRole('link',{name:'Continue'}).click();
    //if getElementLocator("//input[@id='email']")
    //returns: this.page.locator("//input[@id='email'])
    //If locator is not string, getElementLocator((page.getByRole('button', { name: 'Submit' }))
    //return page.getByRole('button', { name: 'Submit' })

    public getElementLocator(locator:flexibleLocator):Locator{
        if(typeof locator === 'string'){
            return this.page.locator(locator); //for xpath
        }
        return locator; //for page.getByRole
    }

    async click(locator:flexibleLocator,options?:{force?:boolean;timeout?:number}):Promise<void>
    {
        await this.getElementLocator(locator).click({
            force:options?.force,
            timeout:options?.timeout ||
            this.defaultTimeOut

        });
        console.log(`clicked on element: ${locator}`);
    }

    async fill(locator:flexibleLocator,value:string):Promise<void>{
        await this.getElementLocator(locator).fill(value,{timeout:this.defaultTimeOut});
        console.log(`Filled the text ${value} in the element ${locator}`)
    }

     async dblclick(locator:flexibleLocator):Promise<void>
    {
        await this.getElementLocator(locator).dblclick({timeout:this.defaultTimeOut});
        console.log(`Double clicked on element: ${locator}`);
    }

     async rightClick(locator:flexibleLocator):Promise<void>
    {
        await this.getElementLocator(locator).click({
            button:'right',
            timeout:this.defaultTimeOut
        });
        console.log(`Right clicked on element: ${locator}`);
    }

    async type(locator:flexibleLocator,value:string,delay:number=500):Promise<void>{
        await this.getElementLocator(locator).pressSequentially(value,{delay,timeout:this.defaultTimeOut});
        console.log(`Filled the text ${value} in the element ${locator}`)
    }

    async clear(locator:flexibleLocator):Promise<void>{
        await this.getElementLocator(locator).clear({timeout:this.defaultTimeOut});

    }

    /**
     * Get text content of an element
     */

    async getText(locator:flexibleLocator):Promise<string | null>
    {
        const text = await this.getElementLocator(locator).textContent({timeout:this.defaultTimeOut});
        return text;
    }

    /**
     * Get attribute value of an element
     */

    async getInnerText(locator:flexibleLocator):Promise<string>
    {
        const text = await this.getElementLocator(locator).innerText({timeout:this.defaultTimeOut});
        return text;
    }

    /**
     * Get input value of an element(text field)
     */
    async getAttributeValue(locator:flexibleLocator,attributeName:string):Promise<string | null>
    {
        return await this.getElementLocator(locator).getAttribute(attributeName);
    }

    /**
     * Get input value of an element(text field)
     */ 

    async getInputValue(locator:flexibleLocator):Promise<string | null>
    {
        return await this.getElementLocator(locator).inputValue({timeout:this.defaultTimeOut});
    }

    /**
     * Get all text contentfrom multiple elements
     */ 

    async getAllInnerTexts(locator:flexibleLocator):Promise<string[]>
    {
        return await this.getElementLocator(locator).allInnerTexts();
    }



    //========================Element visiblity  & state check============================//

    async isVisible(locator:flexibleLocator,timeout:number =5000):Promise<boolean>
    {
        try{
            await this.getElementLocator(locator).waitFor({state:'visible',timeout});
            return true;
        }
        catch{
            return false;
        }
    }

     async isHidden(locator:flexibleLocator):Promise<boolean>
    {

        return await this.getElementLocator(locator).isHidden();
  
    }

     async isEnabled(locator:flexibleLocator):Promise<boolean>
    {

        return await this.getElementLocator(locator).isEnabled();
  
    }

     async isDisbaled(locator:flexibleLocator):Promise<boolean>
    {

        return await this.getElementLocator(locator).isDisabled();
  
    }

    async isChecked(locator:flexibleLocator):Promise<boolean>
    {

        return await this.getElementLocator(locator).isChecked();
  
    }

    async isEditable(locator:flexibleLocator):Promise<boolean>
    {

        return await this.getElementLocator(locator).isEditable();
  
    }


    //=============================Wait Utils====================================//

    async waitForElementVisible(locator:flexibleLocator,timeout:number =5000):Promise<boolean>
    {
        try{
            await this.getElementLocator(locator).waitFor({state:'visible',timeout});
            console.log(`wait for element to be visible`);
            return true;
        }
        catch{
            return false;
        }
    }

    async waitForElementAttached(locator:flexibleLocator,timeout:number =5000):Promise<boolean>
    {
        try{
            await this.getElementLocator(locator).waitFor({state:'attached',timeout});
            console.log(`wait for element to be attached`);
            return true;
        }
        catch{
            return false;
        }
    }

    //Wait for page load state
    async waitForPageLoad(state:'load'|'domcontentloaded'|'networkidle'='load'):Promise<void>{
        await this.page.waitForLoadState(state); 
        console.log(`waited for page load state: ${state}`);
    }

    //wait for specific timeout
    async sleep(timeOut:number):Promise<void>{
        this.page.waitForTimeout(timeOut);
        console.log(`waited for ${timeOut} ms`);
    }


//***********************DropDown Utils /Select Based DropDown *******************//

    async selectByText(locator:flexibleLocator,text:string)
    {
        await this.getElementLocator(locator).selectOption({label:text},{timeout:this.defaultTimeOut})
        console.log(`selected option ${text} from dropdown ${locator}`);
    }

    async selectByValue(locator:flexibleLocator,value:string)
    {
        await this.getElementLocator(locator).selectOption({value:value},{timeout:this.defaultTimeOut})
        console.log(`selected option ${value} from dropdown ${locator}`);
    }

    async selectByOption(locator:flexibleLocator,index:number)
    {
        await this.getElementLocator(locator).selectOption({index:index},{timeout:this.defaultTimeOut})
        console.log(`selected option ${index} from dropdown ${locator}`);
    }
}