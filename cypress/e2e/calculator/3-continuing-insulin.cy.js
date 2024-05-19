/// <reference types="cypress" />

describe('Continuing insulin infusion function', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('allows click on starting insulin button', () => {
    cy.contains('My patient is currently on an insulin infusion').click();
    cy.get('.adviceB').should('be.visible');
  });

  it('allows selection of a glucose value of 12.2', () => {
    cy.contains('My patient is currently on an insulin infusion').click();
    cy.get(':nth-child(1) > .ui > .search').click().type('12.2');
    cy.get('.scrollhint > [data-value="12.2"]').then(items => {
      items[0].click();
    });
  });

  it('allows selection of a previous glucose value of 20.2', () => {
    cy.contains('My patient is currently on an insulin infusion').click();
    cy.get(':nth-child(1) > .ui > .search').click().type('12.2');
    cy.get('.scrollhint > [data-value="12.2"]').then((items) => {
      items[0].click();
    });
    cy.get(':nth-child(2) > .ui > .search').click().type('20.2');
    cy.get('.scrollhint > [data-value="20.2"]').then(items => {
      items[1].click();
    });
  });

  it('allows selection of a current rate of 6.0', () => {
    cy.contains('My patient is currently on an insulin infusion').click();
    cy.get(':nth-child(1) > .ui > .search').click().type('12.2');
    cy.get('.scrollhint > [data-value="12.2"]').then((items) => {
      items[0].click();
    });
    cy.get(':nth-child(2) > .ui > .search').click().type('20.2');
    cy.get('.scrollhint > [data-value="20.2"]').then(items => {
      items[1].click();
    });
    cy.get(':nth-child(3) > .ui > .search').click().type('6.0');
    cy.get('.scrollhint > [data-value="6"]').then(items => {
      items[2].click();
    });
  });

  it('Calculate button not initially displayed...', () => {
    cy.contains('My patient is currently on an insulin infusion').click();
    cy.get(':nth-child(1) > .ui > .search').click().type('12.2');
    cy.get('.scrollhint > [data-value="12.2"]').then((items) => {
      items[0].click();
    });
    cy.get(':nth-child(2) > .ui > .search').click().type('20.2');
    cy.get('.scrollhint > [data-value="20.2"]').then((items) => {
      items[1].click();
    });
    cy.get(':nth-child(3) > .ui > .search').click().type('6.0');
    cy.get('.scrollhint > [data-value="6"]').then((items) => {
      items[2].click();
    });
    cy.get('.yellow').should('not.exist');
  });

  it('...until substrate button is checked', () => {
    cy.contains('My patient is currently on an insulin infusion').click();
    cy.get(':nth-child(1) > .ui > .search').click().type('12.2');
    cy.get('.scrollhint > [data-value="12.2"]').then((items) => {
      items[0].click();
    });
    cy.get(':nth-child(2) > .ui > .search').click().type('20.2');
    cy.get('.scrollhint > [data-value="20.2"]').then((items) => {
      items[1].click();
    });
    cy.get(':nth-child(3) > .ui > .search').click().type('6.0');
    cy.get('.scrollhint > [data-value="6"]').then((items) => {
      items[2].click();
    });
    cy.get('.toggle.checkbox').click();
    cy.get('.yellow').should('exist');
  });

  it('Generates advice to drop rate to 3.6 ml/hr and recheck in an hr', () => {
    cy.contains('My patient is currently on an insulin infusion').click();
    cy.get(':nth-child(1) > .ui > .search').click().type('12.2');
    cy.get('.scrollhint > [data-value="12.2"]').then((items) => {
      items[0].click();
    });
    cy.get(':nth-child(2) > .ui > .search').click().type('20.2');
    cy.get('.scrollhint > [data-value="20.2"]').then((items) => {
      items[1].click();
    });
    cy.get(':nth-child(3) > .ui > .search').click().type('6.0');
    cy.get('.scrollhint > [data-value="6"]').then((items) => {
      items[2].click();
    });
    cy.get('.toggle.checkbox').click();
    cy.get('.yellow').click();
    cy.contains('3.6ml/hr');
    cy.contains('Recheck blood glucose in 1 hour');
  });

});
