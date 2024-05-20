import React, {useMemo, useState} from 'react';
import {Modal} from "../../globalComponents/Modal/Modal";
import {RegOrSig} from "../modal";
import {SignIn, SignUp} from "./index";
import {Link} from "react-router-dom";

export const AuthModal = () => {

    const [pageRegOrSig, setPageRegOrSig] = useState<RegOrSig>(RegOrSig.signIn)

    const label = useMemo(() => {
        if (pageRegOrSig === RegOrSig.signIn) {
            return "Вход в учебную запись"
        }
        return "Регистрация профиля"
    }, [pageRegOrSig])

    return (
        <Modal
            label={label}
        >
            {
                pageRegOrSig === RegOrSig.signIn
                    ? <SignIn/>
                    : <SignUp/>
            }
        </Modal>
    );
};
