export enum ISex {
    MALE  = "Мужской",
    FEMALE  = "Женский"
}

export interface IUserProfile {
    sex: ISex;
    age: number;
    hobbies: string [];
    about_yourself: string;
}

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
    user_profile_id: number,
    user_profile: IUserProfile,
    user_preferred_id: number,
}