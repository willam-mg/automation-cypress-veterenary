import { SELECTORS } from "../constants/selector.constants";

export class AppointmentCreatePage {
    elements = {
        buttonOpenSelectPet: () => cy.contains('button', /Seleccionar mascota/i),
        tableSelectPet: () => cy.contains('.modal-card', 'Seleccionar mascota').find('table'),
        buttonOpenSelectVeterinarian: () => cy.contains('button', /Seleccionar veterinario/i),
        tableSelectVeterinarian: () => cy.contains('.modal-card', 'Seleccionar veterinario').find('table'),
        inputAppointmentDateTime: () => cy.get('input[data-testid="appointment-date"]').first(),
        selectStatus: () => cy.get('select[formcontrolname="status"]').first(),
        inputReason: () => cy.get('input[data-testid="appointment-reason"]').first(),
        checkInputGeneralService: () => cy.contains('Consulta general').closest('label').find('input[type="checkbox"]'),
        checkInputAnualVacunationService: () => cy.contains('Vacunacion anual').closest('label').find('input[type="checkbox"]'),
        checkInputDesparacitacionService: () => cy.contains('Desparasitacion').closest('label').find('input[type="checkbox"]'),
        textareaNotes: () => cy.get('textarea[formcontrolname="notes"]').first(),
        submitButton: () => cy.get('button[data-testid="appointment-submit"], button[type="submit"]').first(),
    };

    visit(): void {
        cy.visit('/appointments');
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

    setAppointmentDate(appointmentDateTime: string): void {
        this.elements.inputAppointmentDateTime()
            .should('be.visible')
            .focus()
            .clear()
            .type(appointmentDateTime, { force: true })
            .blur();
    }

    fillReason(reason: string): void {
        this.elements.inputReason()
            .clear()
            .type(reason);
    }

    selectStatus(status: string): void {
        this.elements.selectStatus()
            .select(status);
    }

    fillNotes(notes: string): void {
        this.elements.textareaNotes()
            .clear()
            .type(notes);
    }

    submit(): void {
        this.elements.submitButton()
            .click();
    }

    register(
        appointmentDateTime: string,
        reason: string,
        typeServices: string[],
        status?: string,
        notes?: string
    ): void {
        this.visit();

        this.selectPet();
        this.selectVeterinarian();
        this.setAppointmentDate(appointmentDateTime);
        this.fillReason(reason);

        typeServices.forEach(itemTypeService => {
            switch (itemTypeService) {
                case SELECTORS.SERVICE_GENERAL:
                    this.elements.checkInputGeneralService().click();
                    break;
                case SELECTORS.SERVICE_VACUNACION:
                    this.elements.checkInputGeneralService().click();
                    break;
                case SELECTORS.SERVICE_DESPARACITACION:
                    this.elements.checkInputGeneralService().click();
                    break;
                default:
                    break;
            }
        });

        if (status) {
            this.selectStatus(status);
        }

        if (notes) {
            this.fillNotes(notes);
        }

        this.submit();
    }
}
