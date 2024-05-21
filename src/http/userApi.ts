import {$host} from "./index";

export const login = async (email: string, password: string) => {
    const  response = await $host.post('auth/login', {
        email, password
    });
    return response;
}

export const registration = async (email: string, password: string) => {
    const  response = await $host.post('auth/registration', {
        email, password
    });
    return response;
}