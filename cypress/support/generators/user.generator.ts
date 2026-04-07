import { faker } from '@faker-js/faker';
import { User } from '../type/user.type';

export const generateUser = (): User => {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        role: faker.helpers.arrayElement(['admin', 'recepcionist', 'veterinarian']),
        password: faker.internet.password()
    };
};