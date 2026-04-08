describe('List Clients', () => {
    it('@regression Should load list clients successfully', () => {
        cy.login();

        cy.intercept('GET', '**/clients*').as('clientsRequest');

        cy.visit('/clients');

        cy.wait('@clientsRequest')
            .its('response.statusCode')
            .should('eq', 200);

        cy.get('table tbody tr').should('have.length.greaterThan', 0);
    })
})