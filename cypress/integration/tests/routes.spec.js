/// <reference types="Cypress" />

context('Forms', () => {

    it('Blog Page', () => {
        // https://on.cypress.io/type
        cy.screenshot()

        cy.visit('http://localhost:8000/blog')

        cy.get('#blog_page').contains('Blog')
    })

    it('Post Page', () => {
        // https://on.cypress.io/type
        cy.screenshot()

        cy.get('#btn_post').click()

        cy.get('#post_page')
    })

    it('Jobs Page', () => {
        // https://on.cypress.io/type
        cy.screenshot()

        cy.visit('http://localhost:8000/jobs')

        cy.get('#jobs_page')
    })

    it('Impressum Page', () => {
        // https://on.cypress.io/type
        cy.screenshot()

        cy.visit('http://localhost:8000/impressum')

        cy.get('#impressum_page')
    })

    it('Datenschutzerklaerung Page', () => {
        // https://on.cypress.io/type
        cy.screenshot()

        cy.visit('http://localhost:8000/datenschutzerklaerung')

        cy.get('#datenschutzerklaerung_page')
    })

    it('404 Page', () => {
        // https://on.cypress.io/type
        cy.screenshot()

        cy.visit('http://localhost:8000/datenschutzerklaerung')

        cy.get('#datenschutzerklaerung_page')
    })


})
