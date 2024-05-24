export interface IUser {
    id: number,
    email: string,
    password: string,
    banned: string,
    banReason: string,
    roles: {
        id: number,
        value: string,
        description: string,
    } [],

}