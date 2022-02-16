/// <reference types="cypress" />


it('google test', function() {

    cy.visit('https://www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type('Automation Step by Step{enter}')
    cy.contains('Videos').click()


})
