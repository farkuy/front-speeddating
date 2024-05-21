import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('auth/login', {
        email, password
    });
    localStorage.setItem('token', data.token)
    return jwtDecode(data);
}

export const registration = async (email: string, password: string) => {
    const { data } = await $host.post('auth/registration', {
        email, password
    });
    localStorage.setItem('token', data.token)
    return jwtDecode(data);
}

export const checkAuth = async () => {
    const { data } = await $authHost.get('auth/checkAuth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}