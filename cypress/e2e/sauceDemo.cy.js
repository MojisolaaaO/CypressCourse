//import { selectors } from "../fixtures/elements"
var el
describe('Login', () => {
    before(() => {
        cy.visit('/')
        cy.fixture("locators").then((sel) => {
            el = sel
        })

    })



    // POM using import export
    // it('Verify that user can input their username', () => {
    //     cy.get(selectors.image).should("be.visible").wait(2000)
    //     cy.get(selectors.usernameField).type("stanard_user").clear()
    //     cy.get(selectors.usernameField).type(selectors.username2).wait(2000)
    //     cy.get(selectors.usernameField).should("have.value", "standard_user")

    // })

    // it('Verify that user can input their password', () => {
    //     cy.get(el.passwordField).type(el.password)
    //     cy.get(el.loginButton).click()
    //     cy.get(selectors.passwordField).type("secret_sauce").wait(2000)
    //     cy.get(selectors.loginButton).click()
    //     cy.screenshot('Test')
    // })


    it('Verify that user can login as a locked out user', () => {
        cy.get(el.usernameField).type(el.username2)
        cy.get(el.passwordField).type(el.password)
        cy.get(el.loginButton).click()

    })

    it('Verify that user can login as a standard user', () => {
        cy.get(el.usernameField).clear().type(el.username1)
        cy.get(el.passwordField).clear().type(el.password)
        cy.get(el.loginButton).click()

    })

    it('Verify that user can view product details', () => {
        cy.visit('/')
        cy.get(el.usernameField).type(el.username1)
        cy.get(el.passwordField).type(el.password)
        cy.get(el.loginButton).click()
        cy.get(el.product1).contains("Sauce Labs Backpack").click()
        cy.get(el.productimage).should("be.visible")
    })

})