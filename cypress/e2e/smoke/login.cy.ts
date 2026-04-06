describe('Authentification', () => {
    it('login', () => {
        cy.visit('/login');
        
        cy.get('input[formcontrolname="email"]')
            .should('be.visible')
            .type('admin@admin.com');

        cy.get('input[formcontrolname="password"]')
            .should('be.visible')
            .type('12345678');

        cy.get('button[type="submit"]')
            .should('be.visible')
            .click();

        cy.url().should('include', '/dashboard');
    });
})