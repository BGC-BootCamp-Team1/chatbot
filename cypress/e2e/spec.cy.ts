describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200/')

    cy.get('#mat-select-value-1 > span').click();
    cy.get('#mat-option-0').click();
    cy.get('#mat-mdc-form-field-label-2 > mat-label').click();
    cy.get('#mat-input-0').type("你好呀小可爱");
    cy.get('body > app-root > div > app-chat > mat-card > mat-card-content:nth-child(2) > mat-grid-list > div > mat-grid-tile:nth-child(2) > div > div > button').click();
    cy.get('body > app-root > div > app-chat > mat-card > mat-card-content:nth-child(3)',{ timeout: 5000 }).should('exist');
  })
})
