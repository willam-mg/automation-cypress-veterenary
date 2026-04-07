import {registerCommands} from '../../support/commands';

registerCommands();

describe('Navigation main menu links', () => {
    it('visit Dashboard', () => {
        cy.login();
        
        cy.visit('dashboard');

        cy.contains('h1', 'Dashboard veterinario')
            .should('be.visible');
    })
})