import { faker } from '@faker-js/faker';
import { Pet } from '../type/pet.type';

export const PetGenerator = (): Pet => {
    return {
        name: faker.person.firstName(),
        specie: faker.helpers.arrayElement(['Perro', 'Gato', 'Otro']),
        breed: faker.animal.dog(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate().toString(),
        weight: faker.number.float({ min: 1, max: 50, fractionDigits: 1 }).toString(),
        color: faker.color.human(),
        microchipNumber: faker.number.int().toString(),
        photo: faker.helpers.arrayElement([
            'cypress/fixtures/images/pet1.png',
            'cypress/fixtures/images/pet2.png',
            'cypress/fixtures/images/pet3.png',
        ]),
        allergies: faker.person.bio(),
        notes: faker.book.genre(),
    };
};