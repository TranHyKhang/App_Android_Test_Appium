describe('Learning WebdriverIO API', () => {
    it('Should click on Login Icon successfully', () => {
        const LOGIN_ICON = "~Login"

        $(LOGIN_ICON).click()
        browser.pause(3000)
    })
})