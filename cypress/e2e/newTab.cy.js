describe("automating new tabs", () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        Cypress.on("uncaught:exception", () => {
            return false
        })
    })

    it("this action will open a new tab", () => {
        cy.get('.example > a').click()
    })

    it("thisaction will not open a new tab", () => {
        cy.get('.example > a').invoke("removeAttr", "target").click()
    })
})