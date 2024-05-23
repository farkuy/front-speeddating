import { makeAutoObservable } from "mobx"
import {checkAuth, login, registration} from "../api/userApi";
export default class UserStore {
    private _isAuth: boolean;
    private _user: {};
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    async login (email: string, password: string) {
        try {
            const response = await login(email, password);
            this.setIsAuth(true)
            console.log(response)
        } catch (error) {
            alert('Не верный логин или пароль')
        }
    }

    async registration (email: string, password: string) {
        try {
            const response = await registration(email, password);
            this.setIsAuth(true)
            console.log(response)
        } catch (error) {
            console.log(error)
            alert('Данный имейл уже занят')
        }
    }

    async checkAuth(jwt: string) {
        try {
            const response = await checkAuth(jwt);
            this.setIsAuth(true)
            this.setUser(response)
        } catch (error) {
            console.log(error);
            alert('Чет не так')
        }
    }

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth
    }

    setUser(user: {}) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}

