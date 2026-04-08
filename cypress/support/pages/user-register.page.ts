export class RegisterUserPage {
    elements = {
        nameInput: () => cy.get('input[formcontrolname="name"]'),
        emailInput: () => cy.get('input[formcontrolname="email"]'),
        phoneInput: () => cy.get('input[formcontrolname="phone"]'),
        roleSelect: () => cy.get('select[formcontrolname="role"]'),
        passwordInput: () => cy.get('input[formcontrolname="password"]'),
        passwordConfirmationInput: () => cy.get('input[formcontrolname="password_confirmation"]'),
        submitButton: () => cy.get('button[data-testid="register-submit"]'),
    };

    visit(): void {
        cy.visit('/register');
    }

    fillName(name: string): void {
        this.elements.nameInput()
            .should('be.visible')
            .clear()
            .type(name);
    }

    fillEmail(email: string): void {
        this.elements.emailInput()
            .should('be.visible')
            .clear()
            .type(email);
    }

    fillPhone(phone: string): void {
        this.elements.phoneInput()
            .should('be.visible')
            .clear()
            .type(phone);
    }

    selectRole(role: string): void {
        this.elements.roleSelect()
            .should('be.visible')
            .select(role);
    }

    fillPassword(password: string): void {
        this.elements.passwordInput()
            .should('be.visible')
            .clear()
            .type(password);
    }
    
    fillPasswordConfirmation(password: string): void {
        this.elements.passwordConfirmationInput()
            .should('be.visible')
            .clear()
            .type(password);
    }

    submit(): void {
        this.elements.submitButton()
            .should('be.visible')
            .click();
    }

    register(
        name: string,
        email: string,
        phone: string,
        role: string,
        password: string
    ): void {
        this.visit();

        this.fillName(name);
        this.fillEmail(email);
        this.fillPhone(phone);
        this.selectRole(role);
        this.fillPassword(password);
        this.fillPasswordConfirmation(password);
        this.submit();
    }
}