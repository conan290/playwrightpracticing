import{Page, Locator} from '@playwright/test'


export class TextBoxPage{
    readonly page: Page
    readonly fullName: Locator
    readonly email: Locator
    readonly submitButton: Locator

    constructor(page:Page){
        this.page =page
        this.fullName = page.locator('#userName')
        this.email = page.locator('#userEmail')
        this.submitButton = page.locator('#submit')
    }


    async goto(){
        await this.page.goto('https://demoqa.com/text-box')
    }

    async fillForm(name:string, email:string){
        await this.fullName.fill(name)
        await this.email.fill(email)
        await this.submitButton.click()
    }
}