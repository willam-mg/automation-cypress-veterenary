describe('Navigation main menu links', () => {
    it('visit Dashboard', () => {
        cy.login();
        
        cy.visit('dashboard');

        cy.contains('h1', 'Dashboard veterinario')
            .should('be.visible');
    })

    it('visit clients', () => {
        cy.login();
        
        cy.visit('clients');

        cy.contains('h1', 'Clientes')
            .should('be.visible');
    })

    it('visit veterinarians', () => {
        cy.login();
        
        cy.visit('veterinarians');

        cy.contains('h1', 'Veterinarios')
            .should('be.visible');
    })

    it('visit Pets', () => {
        cy.login();
        
        cy.visit('pets');

        cy.contains('h1', 'Mascotas')
            .should('be.visible');
    })

    it('visit appointments', () => {
        cy.login();
        
        cy.visit('appointments');

        cy.contains('h1', 'Citas')
            .should('be.visible');
    })
    
    it('visit clinical record', () => {
        cy.login();
        
        cy.visit('clinical-records');

        cy.contains('h1', 'Historial clínico')
            .should('be.visible');
    })
})