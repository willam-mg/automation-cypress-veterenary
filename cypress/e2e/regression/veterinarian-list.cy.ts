describe('List Veterinarian', () => {
    it('@regression Should load list veterinarians successfully', () => {
        cy.login();

        cy.intercept('GET', '**/veterinarians*').as('veterinariansRequest');

        cy.visit('/veterinarians');

        cy.wait('@veterinariansRequest')
            .its('response.statusCode')
            .should('eq', 200);

        cy.get('table tbody tr').should('have.length.greaterThan', 0);
    })
})