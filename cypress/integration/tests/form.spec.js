/// <reference types="Cypress" />

context('Forms', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000/')

    })


    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.screenshot()

        cy.get('#name')
            .type('carlos').should('have.value', 'carlos')


        cy.get('#_replyto')
            .type('carlos.ziegler@email.com', {delay: 100})
            .should('have.value', 'carlos.ziegler@email.com')

        cy.get('#messageText')
            .type('Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht.', {delay: 100})
            .should('have.value', 'Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht.')

    })

})
