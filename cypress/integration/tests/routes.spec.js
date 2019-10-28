/// <reference types="Cypress" />

context('Forms', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000/')

    })
    it('page', () => {
        // https://on.cypress.io/type
        cy.screenshot()
    })

})
