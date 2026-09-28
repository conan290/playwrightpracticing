import {test as base, Page} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'



export const test = base.extend<{loggedInPage:Page}>({
    loggedInPage: async ({page}, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await loginPage.login('conan', 'conan12345')

        await use(page)
    }

    
})