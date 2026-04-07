import { faker } from '@faker-js/faker';
import { Client } from '../type/client.type';

export const ClientGenerator = (): Client => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.number.int({min: 99999, max: 9999999}).toString(),
        document: faker.number.int({min: 99999, max: 9999999}).toString(),
        address: faker.location.streetAddress(),
        photo: faker.helpers.arrayElement([
            'cypress/fixtures/images/client1.png',
            'cypress/fixtures/images/client2.png',
            'cypress/fixtures/images/client3.png',
        ]),
        notes: faker.book.genre(),
    };
};