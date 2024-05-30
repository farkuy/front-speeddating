import {useMemo, useState} from 'react';
import {RegOrSig} from "../../../../entities/modal";

export const useSelectAuthForm = () => {

    const [pageRegOrSig, setPageRegOrSig] = useState<RegOrSig>(RegOrSig.signIn);
    const [btnAuthName, setBtnName] = useState('Зарегестрироваться')

    const label = useMemo(() => {
        if (pageRegOrSig === RegOrSig.signIn) {
            setBtnName('Зарегестрироваться')
            return "Вход в учетную запись"
        }
        setBtnName("Войти")
        return "Регистрация профиля"
    }, [pageRegOrSig])

    const authHandler = () => {
        if( pageRegOrSig === RegOrSig.signIn) {
            setPageRegOrSig(RegOrSig.signUp)
        } else {
            setPageRegOrSig(RegOrSig.signIn)
        }
    }

    return {
        authHandler,
        pageRegOrSig,
        label,
        btnAuthName,
    };
};

