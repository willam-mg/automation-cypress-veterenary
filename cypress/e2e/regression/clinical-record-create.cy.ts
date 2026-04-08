import { ClinicalRecordGenerator } from "../../support/generators/clinical-record.generator";
import { ClinicalRecordCreatePage } from "../../support/pages/clinical-record-create.page";

describe('Clinical record create', () => {
    it('@regression Should create a clinical record successfully', () => {
        cy.login();

        const clinicalRecord = ClinicalRecordGenerator();
        const clinicalRecordCreatePage = new ClinicalRecordCreatePage();

        clinicalRecordCreatePage.register(
            clinicalRecord.recordDate,
            clinicalRecord.diagnosis,
            clinicalRecord.treatment,
            clinicalRecord.observations,
            clinicalRecord.weight,
            clinicalRecord.temperature,
            clinicalRecord.nextVisitDate
        );

        cy.get('.message.success')
            .should('be.visible');
    });
});
