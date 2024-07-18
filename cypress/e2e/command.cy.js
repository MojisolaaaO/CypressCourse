let el
describe("custom login commands", () => {
    before(() => {
        cy.visit('/')
        cy.fixture("command").then((sel) => {
            el = sel
        })
        Cypress.on("uncaught:exception", () => {
            return false
        })

    })

    it("use can login successfully", () => {
        //cy.login()
        cy.login2(el.username, el.password)
        cy.screenshot()

    })

    it.skip("user can login using reusable functions", () => {
        cy.tyAssert("command", el.usernameField, el.username)
        cy.tyAssert("command", el.passwordField, el.password)
        cy.pressDown("command", el.loginButton)
    })


})