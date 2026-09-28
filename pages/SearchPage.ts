import {Page, Locator} from '@playwright/test'

export class SearchPage {
    readonly page: Page
    readonly input: Locator


    constructor(page:Page){
        this.page = page
        this.input = page.locator('#search-input')
    }


    async search(term: string){
        await this.input.click()
        await this.input.fill(term)
        await this.page.keyboard.press('Enter')
    }

    async waitForResults(){
        return this.page.waitForResponse('**/api/search')
    }
}