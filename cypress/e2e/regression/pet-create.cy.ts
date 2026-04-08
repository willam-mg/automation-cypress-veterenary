import { PetGenerator } from "../../support/generators/pet.generator"
import { PetCreatePage } from "../../support/pages/pet-create.page";

describe('Pet create', () => {
    it('@regression Should create a pet successfully', () => {
        cy.login();

        const pet = PetGenerator();
        const petCreatePage = new PetCreatePage();

        petCreatePage.register(
            pet.name,
            pet.specie,
            pet.breed,
            pet.sex,
            pet.birthDate,
            pet.weight,
            pet.color,
            pet.microchipNumber,
            pet.photo,
            pet.allergies,
            pet.notes);

        cy.get('.message.success')
            .should('be.visible')
            .and('contain', 'Mascota creada.');
    })
})