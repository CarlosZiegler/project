/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/')

  })


  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type

    cy.contains('#navbar')

    cy.get('#name')
      .type('carlos').should('have.value', 'carlos')


    cy.get('#_replyto')
        .type('carlos.ziegler@email.com', { delay: 100 })
        .should('have.value', 'carlos.ziegler@email.com')

    cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')
  })

})
