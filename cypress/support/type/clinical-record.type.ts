export interface ClinicalRecord {
    pet_id?: string;
    veterinarian_id?: string;
    appointment_id?: string;
    recordDate: string;
    diagnosis: string;
    treatment: string;
    observations: string;
    weight?: string;
}
