describe('List Pet', () => {
    it('@regression Should load list pets successfully', () => {
        cy.login();

        cy.intercept('GET', '**/pets*').as('petsRequest');

        cy.visit('/pets');

        cy.wait('@petsRequest')
            .its('response.statusCode')
            .should('eq', 200);

        cy.get('table tbody tr').should('have.length.greaterThan', 0);
    })
})