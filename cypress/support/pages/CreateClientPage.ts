export class CreateClientPage {
    elements = {
        firstNameInput: () => cy.get('input[formcontrolname="first_name"]'),
        lastNameInput: () => cy.get('input[formcontrolname="last_name"]'),
        emailInput: () => cy.get('input[formcontrolname="email"]'),
        phoneInput: () => cy.get('input[formcontrolname="phone"]'),
        documentInput: () => cy.get('input[data-testid="client-document"]'),
        addressInput: () => cy.get('input[formcontrolname="address"], textarea[formcontrolname="address"]'),
        inputPhoto: () => cy.get('input[type="file"]'),
        submitButton: () => cy.get('button[data-testid="client-submit"], button[type="submit"]'),
    };

    visit(): void {
        cy.visit('/clients/create');
    }

    fillFirstName(firstName: string): void {
        this.elements.firstNameInput()
            .should('be.visible')
            .clear()
            .type(firstName)
            .should('have.value', name);
    }
    
    fillLastName(lastName: string): void {
        this.elements.lastNameInput()
            .should('be.visible')
            .clear()
            .type(lastName)
            .should('have.value', name);
    }

    fillEmail(email: string): void {
        this.elements.emailInput()
            .should('be.visible')
            .clear()
            .type(email)
            .should('have.value', email);
    }

    fillPhone(phone: string): void {
        this.elements.phoneInput()
            .should('be.visible')
            .clear()
            .type(phone)
            .should('have.value', phone);
    }
    
    fillDocument(document: string): void {
        this.elements.documentInput()
            .should('be.visible')
            .clear()
            .type(document)
            .should('have.value', document);
    }

    fillAddress(address: string): void {
        this.elements.addressInput()
            .should('be.visible')
            .clear()
            .type(address)
            .should('have.value', address);
    }

    setPhoto(photoPath: string): void {
        this.elements.inputPhoto()
            .should('exist')
            .selectFile(photoPath, { force: true });
    }

    submit(): void {
        this.elements.submitButton()
            .should('be.visible')
            .and('not.be.disabled')
            .click();
    }

    create(
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        address?: string,
        document?: string,
        photo?: string
    ): void {
        this.visit();
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillEmail(email);
        this.fillPhone(phone);

        if (address) {
            this.fillAddress(address);
        }
        
        if (document) {
            this.fillDocument(document);
        }
        
        if (photo) {
            this.setPhoto(photo);
        }

        this.submit();
    }
}
