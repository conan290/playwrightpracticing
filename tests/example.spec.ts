import { test } from '../fixtures/apiContext'
import { expect } from '@playwright/test'

test('practicing', async ({ apiContext }) => {
    const response = await apiContext.post('/api/login', {
        data: { email: 'eve.holt@reqres.in', password: 'cityslicka' }
    })

    const body = await response.json()
    const token = body.token

    const response2 = await apiContext.get('/api/users/2', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    expect(response2.status()).toBe(200)
    const body2 = await response2.json()
    expect(body2.data.id).toBe(2)
})


