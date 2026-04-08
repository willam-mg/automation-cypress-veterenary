export class CreateClientPage {
    elements = {
        firstNameInput: () => cy.get('input[data-testid="client-first-name"]'),
        lastNameInput: () => cy.get('input[data-testid="client-last-name"]'),
        emailInput: () => cy.get('input[data-testid="client-email"]'),
        phoneInput: () => cy.get('input[data-testid="client-phone"]'),
        documentInput: () => cy.get('input[data-testid="client-document"]'),
        addressInput: () => cy.get('input[formcontrolname="address"], textarea[formcontrolname="address"]'),
        inputPhoto: () => cy.get('input[type="file"]'),
        textAreaNotes: () => cy.get('textarea[formcontrolname="notes"]'),
        submitButton: () => cy.get('button[data-testid="client-submit"], button[type="submit"]'),
    };

    visit(): void {
        cy.visit('/clients');
    }

    fillFirstName(firstName: string): void {
        this.elements.firstNameInput()
            .should('be.visible')
            .clear();

        this.elements.firstNameInput()
            .type(firstName);

        this.elements.firstNameInput()
            .should('have.value', firstName);
    }
    
    fillLastName(lastName: string): void {
        this.elements.lastNameInput()
            .should('be.visible')
            .clear();

        this.elements.lastNameInput()
            .type(lastName);

        this.elements.lastNameInput()
            .should('have.value', lastName);
    }

    fillEmail(email: string): void {
        this.elements.emailInput()
            .should('be.visible')
            .clear();

        this.elements.emailInput()
            .type(email);

        this.elements.emailInput()
            .should('have.value', email);
    }

    fillPhone(phone: string): void {
        this.elements.phoneInput()
            .should('be.visible')
            .clear();

        this.elements.phoneInput()
            .type(phone);

        this.elements.phoneInput()
            .should('have.value', phone);
    }
    
    fillDocument(document: string): void {
        this.elements.documentInput()
            .should('be.visible')
            .clear();

        this.elements.documentInput()
            .type(document);

        this.elements.documentInput()
            .should('have.value', document);
    }

    fillAddress(address: string): void {
        this.elements.addressInput()
            .should('be.visible')
            .clear();

        this.elements.addressInput()
            .type(address);

        this.elements.addressInput()
            .should('have.value', address);
    }

    setPhoto(photoPath: string): void {
        this.elements.inputPhoto()
            .should('exist')
            .selectFile(photoPath, { force: true });
    }
    
    setNotes(notes: string): void {
        this.elements.textAreaNotes()
            .should('be.visible')
            .clear();

        this.elements.textAreaNotes()
            .type(notes);

        this.elements.textAreaNotes()
            .should('have.value', notes);
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
        photo?: string,
        notes?: string,
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

        if (notes) {
            this.setNotes(notes);
        }

        this.submit();
    }
}
