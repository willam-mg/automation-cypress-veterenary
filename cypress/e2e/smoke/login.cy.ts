import { registerCommands } from '../../support/commands';

registerCommands();

describe('Authentification', () => {
    it('@smoke login', () => {
        cy.login()
    });
})