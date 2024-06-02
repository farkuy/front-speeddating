import {makeAutoObservable} from "mobx"
import {checkAuth, getUserProfile, login, registration, setUserProfile} from "../../api/userApi";
import {IUser, IUserProfile} from "./schema";

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
            this.setIsAuth(true)
            this.setUser(response)
            if (this._user?.user_profile_id) {
                this._user.user_profile = await getUserProfile(this._user?.user_profile_id);
            }
        } catch (error) {
            console.log(error);
            alert('Чет не так')
        }
    }

    async getUserProfile() {
        try {
            if (this._user?.user_profile_id) {
                console.log(this._user?.user_profile_id)
                const response = await getUserProfile(this._user?.user_profile_id);
                this._user.user_profile = response;
            }
        } catch (error) {
            console.log(error);
            alert('Чет не так')
        }
    }

    async setUserProfile(userProfile: IUserProfile) {
        try {
            if (this._user?.user_profile_id) {
                await setUserProfile(userProfile, this._user?.user_profile_id);
                this._user.user_profile = userProfile;
            }
        } catch (error) {
            console.log(error);
            alert('Чет не так');
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

