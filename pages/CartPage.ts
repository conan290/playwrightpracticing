import {Page, Locator} from '@playwright/test'

export class CartPage {
    readonly page:Page
    readonly button:Locator


    constructor(page:Page){
        this.page = page
        this.button = page.locator('#add-item-btn')
    }

    async goto(){
        await this.page.goto('http://localhost:3000/cart')
    }

    async addItem(){
        await this.button.click()
    }

    async waitForCartUpdate(){
        return this.page.waitForResponse('**/api/cart')
    }
}