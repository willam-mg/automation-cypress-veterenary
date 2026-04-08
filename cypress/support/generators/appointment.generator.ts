import { faker } from '@faker-js/faker';
import { Appointment } from '../type/appointment.type';

export const AppointmentGenerator = (): Appointment => {
    return {
        appointmentDateTime: faker.date.soon({ days: 15 }).toISOString().slice(0, 10) + 'T' + faker.helpers.arrayElement(['09:00', '10:30', '14:00', '16:30']),
        reason: faker.lorem.sentence(),
        services: faker.helpers.arrayElements(['Consulta', 'Control', 'Vacunación']),
        status: faker.helpers.arrayElement(['confirmed', 'completed', 'cancelled']),
        notes: faker.lorem.paragraph(),
    };
};
