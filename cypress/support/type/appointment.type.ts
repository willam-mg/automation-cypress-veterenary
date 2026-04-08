export interface Appointment {
    pet_id?: string;
    veterinarian_id?: string;
    appointmentDateTime: string;
    reason: string;
    services: string[];
    status?: string;
    notes?: string;
}
