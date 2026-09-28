import {chromium} from '@playwright/test'


export default async function globalSetup(){
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('http://localhost:3000/login')
    await page.locator('#username').fill(process.env.USERNAME!)
    await page.locator('#password').fill(process.env.PASSWORD!)
    await page.locator('#submit').click()

    await context.storageState({path:'auth.json'})
    await browser.close()
   
}