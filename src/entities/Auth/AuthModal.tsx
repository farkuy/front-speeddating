import React from 'react';
import {Modal} from "../../globalComponents/Modal/Modal";
import {RegOrSig} from "../modal";
import {SignIn} from "./components/SignIn";
import {SignUp} from "./components/SignUp";
import {useAuthPage} from "../../router/pages/Auth/hooks/useAuthPage";

export const AuthModal = () => {

    const {
        label,
        pageRegOrSig,
        authHandler,
        btnAuthName
    } = useAuthPage()

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
                onClick={() => authHandler()}
            >
                {btnAuthName}
            </button>
        </Modal>
    );
};

