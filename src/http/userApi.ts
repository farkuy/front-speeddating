import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('auth/login', {
        email, password
    });
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
}

export const registration = async (email: string, password: string) => {
    const { data } = await $host.post('auth/registration', {
        email, password
    });
    console.log(data)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
}

export const checkAuth = async (jwt: string) => {
    const { data } = await $authHost.get('auth/checkAuth', {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}