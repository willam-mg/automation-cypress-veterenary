describe('Login API', () => {
    it('@api should login successfully', () => {

        cy.env(['apiUrl', 'email', 'password']).then(({ apiUrl, email, password }) => {

            if (!apiUrl || !email || !password) {
                throw new Error('Missing environment vars: apiUrl, email or password');
            }

            cy.request({
                method: 'POST',
                url: `${apiUrl}/auth/login`,
                body: { email, password }
            }).then((response) => {
                expect(response.status).to.eq(200);

                expect(response.body.data).to.exist;
                expect(response.body.data.token).to.exist;
                expect(response.body.data.user).to.exist;
                expect(response.body.data.user.email).to.eq(email);

                expect(response.body.message).to.eq('Inicio de sesión exitoso.');
            });

        });

    });
});