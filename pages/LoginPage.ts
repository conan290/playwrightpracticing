import {Page, Locator} from '@playwright/test'

export class LoginPage{
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly submitButton: Locator


    constructor(page:Page){
        this.page = page
        this.username = page.locator('#username')
        this.password = page.locator('#password')
        this.submitButton = page.locator('#submit')
    }


    async goto(){
        await this.page.goto('https://testing.com')
    }

    async login(user:string, password:string){
        await this.username.fill(user)
        await this.password.fill(password)
        await this.submitButton.click()
    }
}