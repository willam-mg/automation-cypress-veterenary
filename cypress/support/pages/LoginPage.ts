import { LoginSelector } from "../selectors/login.selectors";

export class LoginPage {
    elements = {
        emailInput: () => cy.get(LoginSelector.email).first(),
        passwordInput: () => cy.get(LoginSelector.password).first(),
        submitButton: () => cy.get(LoginSelector.submit).first(),
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
