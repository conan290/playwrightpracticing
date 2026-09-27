import {test, expect} from '@playwright/test'
import {CartPage} from '../pages/CartPage'



test('practicing', async ({page}) =>{
  const cartPage = new CartPage(page)
  await page.route('**/api/cart', async (route) => {
    await route.fulfill({
      status:200,
      body: JSON.stringify({
        items: ['laptop'],
        total: 999
       }
      )
    })
  })

  await cartPage.goto()
  await Promise.all([
    cartPage.waitForCartUpdate(),
    cartPage.addItem()
  ])
  await expect(page.locator('#cart-total')).toHaveText('999')
})
