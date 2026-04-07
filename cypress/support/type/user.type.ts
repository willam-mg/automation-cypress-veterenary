export interface User {
    name: string;
    email: string;
    phone: string;
    role: string;
    password: string;
    password_confirmation?: string;
}