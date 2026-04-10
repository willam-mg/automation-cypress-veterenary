describe('Navigation main menu links', () => {
    beforeEach(() => {
        cy.env(['email', 'password']).then(({ email, password }) => {
            cy.session(['navigation-smoke', email, password], () => {
                cy.login();
            }, {
                validate() {
                    cy.visit('dashboard');
                    cy.contains('h1', 'Dashboard veterinario')
                        .should('be.visible');
                },
            });
        });
    });

    it('@smoke visit Dashboard', () => {
        cy.visit('dashboard');

        cy.contains('h1', 'Dashboard veterinario')
            .should('be.visible');
    })

    it('@smoke visit clients', () => {
        cy.visit('clients');

        cy.contains('h1', 'Clientes')
            .should('be.visible');
    })

    it('@smoke visit veterinarians', () => {
        cy.visit('veterinarians');

        cy.contains('h1', 'Veterinarios')
            .should('be.visible');
    })

    it('@smoke visit Pets', () => {
        cy.visit('pets');

        cy.contains('h1', 'Mascotas')
            .should('be.visible');
    })

    it('@smoke visit appointments', () => {
        cy.visit('appointments');

        cy.contains('h1', 'Citas')
            .should('be.visible');
    })
    
    it('@smoke visit clinical record', () => {
        cy.visit('clinical-records');

        cy.contains('h1', 'Historial clínico')
            .should('be.visible');
    })
})
