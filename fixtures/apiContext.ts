    import {APIRequestContext, test as base} from "@playwright/test"

    export const test = base.extend<{apiContext:APIRequestContext}>({
        apiContext: async ({playwright}, use) => {
            const apiRequest = await playwright.request.newContext({
                baseURL: 'https://reqres.in'
            })

            await use(apiRequest)
            await apiRequest.dispose()
        }
    })