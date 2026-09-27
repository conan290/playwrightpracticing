import {test as base, Page} from '@playwright/test'


export const test = base.extend<{loggedInPage:Page}>({
    loggedInPage: async ({page}, use) => {
        await page.goto('http://localhost:3000/login')
        await page.locator('#username').fill(process.env.USERNAME!)
        await page.locator('#password').fill(process.env.PASSWORD!)
        await page.locator('#submit').click()

        await use(page)
    }
})