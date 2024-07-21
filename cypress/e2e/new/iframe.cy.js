describe("automate iframe", () => {
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        Cypress.on("uncaught:exception", () => {
            return false
        })

    })

    it("Verify that user can write an iframe", () => {
        cy.get('#mce_0_ifr').then(($iframe) => {
            let iframeBody = $iframe.contents().find("body")
            cy.wrap(iframeBody).clear().type('Hi! I am Moji')

        })

    })

})