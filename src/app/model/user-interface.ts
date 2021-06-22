export interface UserInterface {
    email: string;
    password: string;
}

export interface adminUser {
    _id: string;
    email: string;
    password: string;
    roles: rol
}
interface rol {
    admin: boolean;
}