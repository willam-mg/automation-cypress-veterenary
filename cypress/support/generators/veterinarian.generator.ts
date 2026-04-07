import { faker } from '@faker-js/faker';
import { Veterinarian } from '../type/veterinarian.type';

export const VeterinarianGenerator = (): Veterinarian => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        licenseNumber: faker.number.int({ min: 1000, max: 999999 }).toString(),
        specialty: faker.person.jobTitle(),
        photo: faker.helpers.arrayElement([
            'cypress/fixtures/images/vet1.png',
            'cypress/fixtures/images/vet2.png',
            'cypress/fixtures/images/vet3.png',
        ]),
    };
};