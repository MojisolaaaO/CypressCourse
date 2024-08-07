var el
describe("Upload Document", () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        Cypress.on("uncaught:exception", () => {
            return false
        })
        cy.fixture("uploadElements").then((sel) => {
            el = sel

        })

    })

    it('Verify that user can upload a document', () => {
        cy.get(el.chooseFileButtton).attachFile("Locked out user.png")
        cy.get(el.uploadButton).click()


    })

    //using xpaths
    it('Verify that user can upload a document', () => {
        cy.xpath("/html/body / div[2] / div / div[1] / form / input[1]").attachFile("Locked out user.png")
        cy.xpath("/html/body/div[2]/div/div[1]/form/input[2]").click()


    })


})