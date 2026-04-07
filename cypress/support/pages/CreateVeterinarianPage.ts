export class CreateVeterinarianPage {
    elements = {
        firstNameInput: () => cy.get('input[formcontrolname="first_name"]'),
        lastNameInput: () => cy.get('input[formcontrolname="last_name"]'),
        emailInput: () => cy.get('input[formcontrolname="email"]'),
        phoneInput: () => cy.get('input[formcontrolname="phone"]'),
        licenseNumberInput: () => cy.get('input[formcontrolname="license_number"]'),
        specialtyInput: () => cy.get('input[formcontrolname="specialty"]'),
        submitButton: () => cy.get('button[data-testid="veterinarian-submit"], button[type="submit"]'),
        inputPhoto: () => cy.get('input[type="file"]')
    };

    visit(): void {
        cy.visit('/veterinarians');
    }

    fillFirstName(firstName: string): void {
        this.elements.firstNameInput()
            .should('be.visible')
            .clear()
            .type(firstName)
            .should('have.value', firstName);
    }

    fillLastName(lastName: string): void {
        this.elements.lastNameInput()
            .should('be.visible')
            .clear()
            .type(lastName)
            .should('have.value', lastName);
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

    fillSpecialty(specialty: string): void {
        this.elements.specialtyInput()
            .should('be.visible')
            .clear()
            .type(specialty)
            .should('have.value', specialty);
    }

    fillLicenseNumber(licenseNumber: string): void {
        this.elements.licenseNumberInput()
            .should('be.visible')
            .clear()
            .type(licenseNumber)
            .should('have.value', licenseNumber);
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
        specialty?: string,
        licenseNumber?: string,
        photo?: string
    ): void {
        this.visit();
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillEmail(email);
        this.fillPhone(phone);

        if (specialty) {
            this.fillSpecialty(specialty);
        }

        if (licenseNumber) {
            this.fillLicenseNumber(licenseNumber);
        }

        if (photo) {
            this.setPhoto(photo);
        }

        this.submit();
    }
}
