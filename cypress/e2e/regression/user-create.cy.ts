import { generateUser } from "../../support/generators/user.generator";
import { RegisterUserPage } from "../../support/pages/user-register.page";

describe('Create user', ()=>{
    it('whould register with success', () => {
        const user = generateUser();

        const registerUserPage = new RegisterUserPage();

        registerUserPage.register(
            user.name,
            user.email,
            user.phone,
            user.role,
            user.password
        );

        cy.location('pathname').should('eq', '/dashboard');
        cy.contains('Dashboard veterinario').should('be.visible');
    })
})