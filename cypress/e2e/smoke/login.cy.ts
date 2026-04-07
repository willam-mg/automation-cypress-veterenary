import { registerCommands } from '../../support/commands';

registerCommands();

describe('Authentification', () => {
    it('login', () => {
        cy.login()
    });
})