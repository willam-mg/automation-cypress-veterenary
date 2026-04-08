export class ClinicalRecordCreatePage {
    elements = {
        buttonOpenSelectPet: () => cy.contains('button', /Seleccionar mascota/i),
        tableSelectPet: () => cy.contains('.modal-card', 'Seleccionar mascota').find('table'),
        buttonOpenSelectVeterinarian: () => cy.contains('button', /Seleccionar veterinario/i),
        tableSelectVeterinarian: () => cy.contains('.modal-card', 'Seleccionar veterinario').find('table'),
        inputRecordDate: () => cy.get('input[data-testid="clinical-record-date"], input[formcontrolname="record_date"], input[formcontrolname="date"]').first(),
        inputDiagnosis: () => cy.get('input[data-testid="clinical-record-diagnosis"], input[formcontrolname="diagnosis"], textarea[formcontrolname="diagnosis"]').first(),
        textareaTreatment: () => cy.get('textarea[data-testid="clinical-record-treatment"], textarea[formcontrolname="treatment"], input[formcontrolname="treatment"]').first(),
        textareaObservations: () => cy.get('textarea[data-testid="clinical-record-observations"], textarea[formcontrolname="observations"], textarea[formcontrolname="notes"]').first(),
        inputWeight: () => cy.get('input[data-testid="clinical-record-weight"], input[formcontrolname="weight"]').first(),
        inputTemperature: () => cy.get('input[data-testid="clinical-record-temperature"], input[formcontrolname="temperature"]').first(),
        inputNextVisitDate: () => cy.get('input[data-testid="clinical-record-next-visit-date"], input[formcontrolname="next_visit_date"]').first(),
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
            .should('exist')
            .invoke('val', recordDate)
            .trigger('change');
    }

    fillDiagnosis(diagnosis: string): void {
        this.elements.inputDiagnosis()
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

    fillTemperature(temperature: string): void {
        this.elements.inputTemperature()
            .clear()
            .type(temperature);
    }

    setNextVisitDate(nextVisitDate: string): void {
        this.elements.inputNextVisitDate()
            .should('exist')
            .invoke('val', nextVisitDate)
            .trigger('change');
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
        temperature?: string,
        nextVisitDate?: string
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

        if (temperature) {
            this.fillTemperature(temperature);
        }

        if (nextVisitDate) {
            this.setNextVisitDate(nextVisitDate);
        }

        this.submit();
    }
}
