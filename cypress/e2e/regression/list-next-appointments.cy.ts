import { registerCommands } from '../../support/commands';

registerCommands();

describe('List next appointments', () => {
    it('Should load rows in the dashboard table', () => {
        cy.login();

        cy.intercept('GET', '**/dashboard').as('getDataDashboard');

        cy.visit('/dashboard');

        cy.wait('@getDataDashboard')
            .its('response.statusCode')
            .should('eq', 200);
        
        cy.get('table tbody tr').should('have.length.greaterThan', 0);
    })




})