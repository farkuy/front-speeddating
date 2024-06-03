import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";
import {IUser, IUserProfile} from "../store/userStore/schema";

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('auth/login', {
        email, password
    });
    localStorage.setItem('token', data.token);
    return jwtDecode<IUser>(data.token);
}

export const registration = async (email: string, password: string) => {
    const { data } = await $host.post('auth/registration', {
        email, password
    });
    localStorage.setItem('token', data.token)
    return jwtDecode<IUser>(data.token);
}

export const checkAuth = async (jwt: string) => {
    const { data } = await $authHost.get('auth/checkAuth', {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
    localStorage.setItem('token', data.token);
    return jwtDecode<IUser>(data.token);
}

export const getUserProfile = async (idUserProfile: number) => {
    const { data } = await $host.get(`user-profile/${idUserProfile}`);
    return data;
}

export const setUserProfile = async (userProfile: IUserProfile, idUserProfile: number) => {
    const { data } = await $host.put(`user-profile/${idUserProfile}`, {
        userProfile
    });
    console.log(23, data)
    return data;
}