/// <reference types="Cypress" />

context('Testing Index.js', () => {
  beforeEach(() => {
    cy.visit('https://focused-benz-0a36bb.netlify.com/blog/')
  })

  it('Content Navbar', () => {
    cy.contains('Schon seit einiger Zeit ')
  })
})
