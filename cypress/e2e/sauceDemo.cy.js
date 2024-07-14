describe('Login', () => {
    before(() => {
        cy.visit('/')


    })
    it('Verify that user can input their username', () => {
        cy.get('.login_logo').should("be.visible").wait(2000)
        cy.get('[data-test="username"]').type("standard_user").wait(2000)
        cy.get('[data-test="username"]').should("have.value", "standard_user")

    })

    it('Verify that user can input their password', () => {
        cy.get('[data-test="password"]').type("secret_sauce").wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.screenshot('Test')

    })

    it('Verify that user cannot login with invalid credentials', () => {
        cy.visit('/')
        cy.get('[data-test="username"]').type("standard_use")
        cy.get('[data-test="password"]').type("secret_sauce").wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should("be.visible")

    })
})