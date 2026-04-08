import { faker } from '@faker-js/faker';
import { ClinicalRecord } from '../type/clinical-record.type';

export const ClinicalRecordGenerator = (): ClinicalRecord => {
    return {
        recordDate: faker.date.recent({ days: 10 }).toISOString().slice(0, 10),
        diagnosis: faker.lorem.words(4),
        treatment: faker.lorem.sentence(),
        observations: faker.lorem.paragraph(),
        weight: faker.number.float({ min: 1, max: 50, fractionDigits: 1 }).toString(),
    };
};
