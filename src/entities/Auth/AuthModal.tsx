import React from 'react';
import {Modal} from "../../globalComponents/Modal/Modal";
import {RegOrSig} from "../modal";
import { SignIn, SignUp} from "./index"
import {useSelectAuthForm} from "../../router/pages/Auth/hooks/useSelectAuthForm";

export const AuthModal = () => {

    const {
        label,
        pageRegOrSig,
        authHandler,
        btnAuthName
    } = useSelectAuthForm()

    return (
        <Modal
            label={label}
        >
            {
                pageRegOrSig === RegOrSig.signIn
                    ? <SignIn/>
                    : <SignUp/>
            }
            <button
                onClick={authHandler}
            >
                {btnAuthName}
            </button>
        </Modal>
    );
};

