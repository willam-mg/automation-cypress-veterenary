export class LoginPage {
    elements = {
        emailInput: () => cy.get('input[data-testid="login-email"]'),
        passwordInput: () => cy.get('input[data-testid="login-password"]'),
        submitButton: () => cy.get('button[data-testid="login-submit"]'),
    };

    visit(): void {
        cy.visit('login');
    }

    fillEmail(email: string): void {
        this.elements.emailInput()
            .should('be.visible')
            .clear()
            .type(email)
            .should('have.value', email)
    }
    
    fillPassword(password: string): void {
        this.elements.passwordInput()
            .should('be.visible')
            .clear()
            .type(password)
            .should('have.value', password)
    }

    submit():void {
        this.elements.submitButton()
            .should('be.visible')
            .and('not.be.disabled')
            .click();
    }

    login(email: string, password: string):void {
        this.visit();
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }
}