/// <reference types="cypress" />

describe('Basic load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('loads the site', () => {
    cy.get('#app > div.ui.container > div.ui.large.header > div').should('contain.text', 'Safer Insulin');
  });
});
