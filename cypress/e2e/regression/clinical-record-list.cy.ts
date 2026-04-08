describe('List Clinical record', () => {
    it('@regression Should load list clinical-records successfully', () => {
        cy.login();

        cy.intercept('GET', '**/clinical-records*').as('clinicalRecordsRequest');

        cy.visit('/clinical-records');

        cy.wait('@clinicalRecordsRequest')
            .its('response.statusCode')
            .should('eq', 200);

        cy.get('table tbody tr').should('have.length.greaterThan', 0);
    })
})