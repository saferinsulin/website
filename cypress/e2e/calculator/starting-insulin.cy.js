/// <reference types="cypress" />

describe('Safer Insulin app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('loads the site', () => {
    cy.get('#app > div.ui.container > div.ui.large.header > div').should('contain.text', 'Safer Insulin');
  })

  it('allows click on starting insulin button', () => {
    cy.contains('My patient is not currently on an insulin infusion').click();
  })

  it('allows selection of an insulin value of 12.2', () => {
    cy.contains('My patient is not currently on an insulin infusion').click();
    cy.get('#fm1 > div > .dropdown').click().type('12.2');
    cy.get('#fm1 > div > .dropdown > .menu > [data-value="12.2"]').click();
  })
})
