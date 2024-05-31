import {makeAutoObservable} from "mobx"
import {checkAuth, getUserProfile, login, registration} from "../../api/userApi";
import {IUser} from "./schema";

export default class UserStore {
    private _isAuth: boolean;
    private _user?: IUser;
    constructor() {
        this._isAuth = false
        this._user = undefined
        makeAutoObservable(this)
    }

    async login (email: string, password: string) {
        try {
            const response = await login(email, password);
            this.setIsAuth(true)
            this.setUser(response)
            await this.getUserProfile()
            console.log(response)
        } catch (error) {
            console.log(error)
            alert('Не верный логин или пароль')
        }
    }

    async registration (email: string, password: string) {
        try {
            const response = await registration(email, password);
            this.setIsAuth(true)
            this.setUser(response)
            console.log(response)
        } catch (error) {
            console.log(error)
            alert('Данный имейл уже занят')
        }
    }

    async checkAuth(jwt: string) {
        try {
            const response = await checkAuth(jwt);
            console.log(response)
            this.setIsAuth(true)
            this.setUser(response)
        } catch (error) {
            console.log(error);
            alert('Чет не так')
        }
    }

    async getUserProfile() {
        try {
            if (this._user?.user_profile_id) {
                const response = await getUserProfile(this._user?.user_profile_id);
                this._user.user_profile = response;
            } else {
                throw new Error("Профиль не найден")
            }
        } catch (error) {
            console.log(error);
            alert('Чет не так')
        }
    }

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth
    }

    setUser(user:  IUser) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}

