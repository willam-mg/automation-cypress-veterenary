const apiUrl:string = Cypress.env('apiUrl') as string

describe('Login API', () => {
    it('login', () => {
        cy.request({
            method: 'POST',
            url: `${apiUrl}/auth/login`,
            body: {
                email: 'admin@admin.com',
                password: '12345678'
            }
        })
    })
})