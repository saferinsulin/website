/// <reference types="cypress" />

describe('Basic load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('loads the site', () => {
    cy.get('#app > div.ui.container > div.ui.large.header > div').should('contain.text', 'Safer Insulin');
  });
});

describe('Starting insulin infusion function', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('allows click on starting insulin button', () => {
    cy.contains('My patient is not currently on an insulin infusion').click();
    cy.get('.adviceA').should('be.visible');
  });

  it('allows selection of an insulin value of 12.2', () => {
    cy.contains('My patient is not currently on an insulin infusion').click();
    cy.get('#fm1 > div > .dropdown').click().type('12.2');
    cy.get('#fm1 > div > .dropdown > .menu > [data-value="12.2"]').click();
  });

  it('Calculate button not initially displayed...', () => {
    cy.contains('My patient is not currently on an insulin infusion').click();
    cy.get('#fm1 > div > .dropdown').click().type('12.2');
    cy.get('#fm1 > div > .dropdown > .menu > [data-value="12.2"]').click();
    cy.get('.doCalcA').should('not.exist');
  });

  it('...until substrate button is checked', () => {
    cy.contains('My patient is not currently on an insulin infusion').click();
    cy.get('#fm1 > div > .dropdown').click().type('12.2');
    cy.get('#fm1 > div > .dropdown > .menu > [data-value="12.2"]').click();
    cy.get('.toggle.checkbox').click();
    cy.get('.doCalcA').should('exist');
  });

  it('Generates advice to start insulin at 2 units/hr', () => {
    cy.contains('My patient is not currently on an insulin infusion').click();
    cy.get('#fm1 > div > .dropdown').click().type('12.2');
    cy.get('#fm1 > div > .dropdown > .menu > [data-value="12.2"]').click();
    cy.get('.toggle.checkbox').click();
    cy.get('.doCalcA').click();
    cy.contains('Start insulin at 2 units/hr');
  });

});
