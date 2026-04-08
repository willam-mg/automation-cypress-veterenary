export class ClinicalRecordCreatePage {
    elements = {
        buttonOpenSelectPet: () => cy.contains('button', /Seleccionar mascota/i),
        tableSelectPet: () => cy.contains('.modal-card', 'Seleccionar mascota').find('table'),
        buttonOpenSelectVeterinarian: () => cy.contains('button', /Seleccionar veterinario/i),
        tableSelectVeterinarian: () => cy.contains('.modal-card', 'Seleccionar veterinario').find('table'),
        selectAppointmentId: () => cy.get('select[formcontrolname="appointment_id"]'),
        inputRecordDate: () => cy.get('input[data-testid="clinical-record-date"], input[formcontrolname="record_date"], input[formcontrolname="date"]').first(),
        textareaDiagnosis: () => cy.get('textarea[formcontrolname="diagnosis"]').first(),
        textareaTreatment: () => cy.get('textarea[formcontrolname="treatment"]').first(),
        textareaObservations: () => cy.get('textarea[formcontrolname="observations"]').first(),
        inputWeight: () => cy.get('input[data-testid="clinical-record-weight"], input[formcontrolname="weight"]').first(),
        submitButton: () => cy.get('button[data-testid="clinical-record-submit"], button[type="submit"]').first(),
    };

    visit(): void {
        cy.visit('/clinical-records');
    }

    selectPet(): void {
        cy.intercept('GET', '**/pets*').as('petsRequest');

        this.elements.buttonOpenSelectPet().click();

        cy.wait('@petsRequest')
            .its('response.statusCode')
            .should('eq', 200);

        this.elements.tableSelectPet()
            .find('tbody tr')
            .then(($rows) => {
                const randomIndex = Math.floor(Math.random() * $rows.length);

                cy.wrap($rows)
                    .eq(randomIndex)
                    .within(() => {
                        cy.contains('button', /seleccionar/i).click();
                    });
            });
    }

    selectVeterinarian(): void {
        cy.intercept('GET', '**/veterinarians*').as('veterinariansRequest');

        this.elements.buttonOpenSelectVeterinarian().click();

        cy.wait('@veterinariansRequest')
            .its('response.statusCode')
            .should('eq', 200);

        this.elements.tableSelectVeterinarian()
            .find('tbody tr')
            .then(($rows) => {
                const randomIndex = Math.floor(Math.random() * $rows.length);

                cy.wrap($rows)
                    .eq(randomIndex)
                    .within(() => {
                        cy.contains('button', /seleccionar/i).click();
                    });
            });
    }

    setRecordDate(recordDate: string): void {
        this.elements.inputRecordDate()
            .should('be.visible')
            .focus()
            .clear()
            .type(recordDate, { force: true })
            .blur();
    }

    selectAppintment(): void {
        cy.intercept('**/appointments*').as('appointMentRequest');

        cy.wait('@appointmentRequest')
            .its('response.statusCode')
            .should('eq', 200);

        this.elements.selectAppointmentId()
            .find('option')
            .then(($options) => {
                const validOptions = $options.filter((i, el) => el.value !== '');

                const randomIndex = Math.floor(Math.random() * validOptions.length);

                const value = Cypress.$(validOptions[randomIndex]).val() as string;

                cy.log(`Seleccionando option: ${value}`);

                this.elements.selectAppointmentId().select(value);
            });
    }

    fillDiagnosis(diagnosis: string): void {
        this.elements.textareaDiagnosis()
            .clear()
            .type(diagnosis);
    }

    fillTreatment(treatment: string): void {
        this.elements.textareaTreatment()
            .clear()
            .type(treatment);
    }

    fillObservations(observations: string): void {
        this.elements.textareaObservations()
            .clear()
            .type(observations);
    }

    fillWeight(weight: string): void {
        this.elements.inputWeight()
            .clear()
            .type(weight);
    }

    submit(): void {
        this.elements.submitButton()
            .click();
    }

    register(
        recordDate: string,
        diagnosis: string,
        treatment: string,
        observations: string,
        weight?: string,
    ): void {
        this.visit();

        this.selectPet();
        this.selectVeterinarian();
        this.setRecordDate(recordDate);
        this.fillDiagnosis(diagnosis);
        this.fillTreatment(treatment);
        this.fillObservations(observations);

        if (weight) {
            this.fillWeight(weight);
        }

        this.submit();
    }
}
