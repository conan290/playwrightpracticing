import {test, expect} from '@playwright/test'
import { TextBoxPage } from '../pages/TextBoxPage'


test('practicing', async ({page}) =>{
    const textBoxPage = new TextBoxPage(page)
    await textBoxPage.goto()
    await textBoxPage.fillForm('Conan Lopez', 'conan290lopez@gmail.com')

    await expect(page.getByText('Conan Lopez')).toBeVisible()
})