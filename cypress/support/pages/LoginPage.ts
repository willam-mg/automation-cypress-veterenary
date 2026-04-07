export class LoginPage {
    elements = {
        emailInput: () => cy.get('input[data-testid="login-email"], input[formcontrolname="email"], input[type="email"]').first(),
        passwordInput: () => cy.get('input[data-testid="login-password"], input[formcontrolname="password"], input[type="password"]').first(),
        submitButton: () => cy.get('button[data-testid="login-submit"], button[type="submit"]').first(),
    };

    visit(): void {
        cy.visit('login');
    }

    fillEmail(email: string): void {
        this.elements.emailInput()
            .should('be.visible')
            .clear()
            .type(email);
    }
    
    fillPassword(password: string): void {
        this.elements.passwordInput()
            .should('be.visible')
            .clear()
            .type(password);
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
