import { makeAutoObservable } from "mobx"
class UserStore {
    private _isAuth: boolean;
    private _user: {};
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth() {
        this._isAuth = false
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

export default new UserStore();