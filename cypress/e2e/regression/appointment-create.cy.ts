import { AppointmentGenerator } from "../../support/generators/appointment.generator";
import { AppointmentCreatePage } from "../../support/pages/appointment-create.page";

describe('Appointment create', () => {
    it('@regression Should create an appointment successfully', () => {
        cy.login();

        const appointment = AppointmentGenerator();
        const appointmentCreatePage = new AppointmentCreatePage();

        appointmentCreatePage.register(
            appointment.appointmentDateTime,
            appointment.reason,
            appointment.services,
            appointment.status,
            appointment.notes
        );
        
        cy.get('.message.success')
            .should('be.visible')
            .and('contain', 'Cita creada.');
    });
});
