/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should go to google', () => {
    cy.google()
  })

  it('should go to localhost and check box component', () => {
    cy.visit('/')

    cy.findByText(/box/i).should('exist')
  })
})
