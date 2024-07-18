Cypress.Commands.add("login", () => {
    cy.fixture("command").then((sel) => {
        cy.get(sel.usernameField).type(sel.username)
        cy.get(sel.passwordField).fill(sel.password)
        cy.get(sel.loginButton).click()
    })

})
Cypress.Commands.add("login2", (username, password) => {
    cy.fixture("command").then((sel) => {
        cy.get(sel.usernameField).type(username)
        cy.get(sel.passwordField).fill(password)
        cy.get(sel.loginButton).click()
    })
})

Cypress.Commands.add("tyAssert", (pomFile, element, words) => {
    cy.fixture(pomFile).then(() => {
        cy.get(element).should("be.visible").type(words)

    })

})

Cypress.Commands.add("pressDown", (pomFile, element) => {
    cy.fixture(pomFile).then(() => {
        cy.get(element).should("be.visible").click()
    })
})