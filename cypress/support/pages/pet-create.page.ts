import { random } from "cypress/types/lodash";

export class PetCreatePage {
    elements = {
        buttonOpenSelectClient: () => cy.contains('button', /Seleccionar cliente/i),
        tableSelectClient: () => cy.contains('.modal-card', 'Seleccionar cliente').find('table'),
        inputName: () => cy.get('input[data-testid="pet-name"]'),
        selectSpecies: () => cy.get('select[formcontrolname="species"]'),
        inputBreed: () => cy.get('input[formcontrolname="breed"]'),
        selectSex: () => cy.get('select[formcontrolname="sex"]'),
        inputBirthDate: () => cy.get('input[formcontrolname="birth_date"]'),
        inputWeight: () => cy.get('input[formcontrolname="weight"]'),
        inputColor: () => cy.get('input[formcontrolname="color"]'),
        inputMicrochipNumber: () => cy.get('input[formcontrolname="microchip_number"]'),
        inputPhoto: () => cy.get('input[type="file"]'),
        textareaAllergies: () => cy.get('textarea[formcontrolname="allergies"]'),
        textareaNotes: () => cy.get('textarea[formcontrolname="notes"]'),
        submitButton: () => cy.get('button[data-testid="pet-submit"], button[type="submit"]'),
    };

    visit(): void {
        cy.visit('/pets');
    }

    selectClient(): void {
        cy.intercept('GET', '**/clients*').as('clientsRequest');

        this.elements.buttonOpenSelectClient().click();

        cy.wait("@clientsRequest")
            .its('response.statusCode')
            .should('eq', 200);

        this.elements.tableSelectClient()
            .find('tbody tr')
            .then(($rows) => {
                const randomIndex = Math.floor(Math.random() * $rows.length);

                cy.wrap($rows)
                    .eq(randomIndex)
                    .within(() => {
                        cy.contains('button', /seleccionar/i).click();
                    });
            })
    }

    fillName(name: string): void {
        this.elements.inputName()
            .clear()
            .type(name);
    }

    selectSpecie(specie: string): void {
        this.elements.selectSpecies()
            .select(specie);
    }

    fillBreed(breed: string): void {
        this.elements.inputBreed()
            .clear()
            .type(breed);
    }

    selectSex(sex: string): void {
        this.elements.selectSex()
            .select(sex);
    }

    setBirthDate(birthDate: string): void {
        this.elements.inputBirthDate()
            .should('exist')
            .invoke('val', birthDate)
            .trigger('change');
    }

    fillWeight(weight: string): void {
        this.elements.inputWeight()
            .clear()
            .type(weight);
    }

    fillColor(color: string): void {
        this.elements.inputColor()
            .clear()
            .type(color);
    }

    fillMicrochipNumber(microchipNumber: string): void {        
        this.elements.inputMicrochipNumber()
            .clear()
            .type(microchipNumber);
    }   

    setPhoto(photo: string): void {
        this.elements.inputPhoto()
            .should('exist')
            .selectFile(photo, {force: true});
    }

    fillAllergies(allergies: string): void {
        this.elements.textareaAllergies()
            .clear()
            .type(allergies)
    }
    
    fillNotes(notes: string): void {
        this.elements.textareaNotes()
            .clear()
            .type(notes)
    }

    submit(): void {
        this.elements.submitButton()
            .click();
    }

    register(
        name,
        specie,
        breed,
        sex,
        birthDate,
        weight,
        color,
        microchipNumber,
        photo,
        allergies,
        notes
    ): void {
        this.visit();

        this.selectClient();
        this.fillName(name);
        this.selectSpecie(specie);
        this.fillBreed(breed);
        this.selectSex(sex);
        this.setBirthDate(birthDate);
        this.fillWeight(weight);
        this.fillColor(color);
        this.fillMicrochipNumber(microchipNumber);
        this.setPhoto(photo);
        this.fillAllergies(allergies);
        this.fillNotes(notes);

        this.submit();
    }
}
