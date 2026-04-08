import { VeterinarianGenerator } from "../../support/generators/veterinarian.generator";
import { CreateClientPage } from "../../support/pages/CreateClientPage";
import { ClientGenerator } from "../../support/generators/client.generator";

describe('Create Client', () => {
    it('@regression Should register as successfull', () => {
        cy.login();

        const client = ClientGenerator();
        
        const createClientPage = new CreateClientPage();

        createClientPage.create(
            client.firstName,
            client.lastName,
            client.email,
            client.phone,
            client.address,
            client.document,
            client.photo,
            client.notes
        );

        
    })
})