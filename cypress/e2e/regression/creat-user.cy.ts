import { generateUser } from "../../support/generators/user.generator";

describe('Create user', ()=>{
    it('whould register with success', () => {
        const user = generateUser();
        
        cy.visit('/register');

        cy.get('input[data-testid="register-name"]')
            .should('be.visible')
            .clear()
            .type(user.name);
            
        cy.get('input[data-testid="register-email"]')
            .should('be.visible')
            .clear()
            .type(user.email);

        cy.get("input[formControlName='phone']")
            .should('be.visible')
            .clear()
            .type(user.phone);

        cy.get('select[formControlName="role"]')
            .should('be.visible')
            .select(user.role);

        cy.get('input[data-testid="register-password"]')
            .should('be.visible')
            .clear()
            .type(user.password);

        cy.get('input[formControlName="password_confirmation"]')
            .should('be.visible')
            .clear()
            .type(user.password);

        cy.get('button[data-testid="register-submit"]').click();

        cy.location('pathname').should('eq', '/dashboard');
        cy.contains('Dashboard veterinario').should('be.visible');
    })
})