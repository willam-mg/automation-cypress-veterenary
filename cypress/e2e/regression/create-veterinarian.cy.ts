import { VeterinarianGenerator } from "../../support/generators/veterinarian.generator";
import { CreateVeterinarianPage } from "../../support/pages/CreateVeterinarianPage"
import { registerCommands } from '../../support/commands';

registerCommands();

describe('Create Veterinarian', () => {
    it('@regression Should register as successfull', () => {
        cy.login();

        const veterinarian = VeterinarianGenerator();
        
        const createVeterinarianPage = new CreateVeterinarianPage();
        const photo = veterinarian.photo;
        cy.log('photo generated', photo);
        createVeterinarianPage.create(
            veterinarian.firstName,
            veterinarian.lastName,
            veterinarian.email,
            veterinarian.phone,
            veterinarian.specialty,
            veterinarian.licenseNumber,
            photo
        );
    })
})