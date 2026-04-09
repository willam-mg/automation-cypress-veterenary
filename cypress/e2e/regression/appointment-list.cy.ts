describe('List Appointments', () => {
    it('@regression Should load list appointments successfully', () => {
        cy.login();

        cy.intercept('GET', '**/appointments*').as('appointmentsRequest');
        cy.visit('/appointments');
        cy.wait('@appointmentsRequest')
            .its('response.statusCode')
            .should('eq', 200);

        cy.get('h1').should('contain', 'Citas');

        cy.get('table tbody')
            .should('exist')
            .find('tr')
            .should('have.length.greaterThan', 0);
    })
})