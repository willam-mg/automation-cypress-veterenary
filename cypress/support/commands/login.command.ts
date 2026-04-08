import { LoginPage } from "../pages/LoginPage";

export function registerLoginCommands() {
    Cypress.Commands.add('login', () => {
        const loginPage = new LoginPage();

        cy.intercept('POST', '**/auth/login').as('loginRequest');

        cy.env(['email', 'password']).then(({ email, password }) => {
            if (!email || !password) {
                throw new Error('Missing environment vars: email or password');
            }

            loginPage.login(email, password);

            cy.wait('@loginRequest')
                .its('response.statusCode')
                .should('eq', 200);
        });
    });
}