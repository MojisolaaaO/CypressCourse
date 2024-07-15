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
            // cy.screenshot('Test')

    })

    it('Verify that user cannot login with invalid credentials', () => {
        cy.visit('/')
        cy.get('[data-test="username"]').type("standard_use")
        cy.get('[data-test="password"]').type("secret_sauce").wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should("be.visible")

    })

    it('Verify that user cannot login with just username', () => {
        cy.visit('/')
        cy.get('[data-test="username"]').type("standard_use")
        cy.get('[data-test="login-button"]').click()
        cy.get('.error-message-container').contains("Password is required")

    })

    it('Verify that user cannot login with just password', () => {
        cy.visit('/')
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('.error-message-container').contains("Username is required")

    })

    it.only('Verify that user can view product details', () => {
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    })

    it.only('Verify that user can add an item to cart', () => {
        cy.get('[data-test="add-to-cart"]').click()

    })

    it.only('Verify that user can remove an item to cart', () => {
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    })


    it.only('Verify that user can logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()

    })



})