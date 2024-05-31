import React from 'react';
import {NavBar} from "../../../globalComponents/NavBar/NavBar";
import {AuthModal} from "../../../entities/Auth/AuthModal";

const AuthPage = () => {
    return (
        <>
            <NavBar/>
            <div style={{height: "100%", width: "100%", display: "flex", justifyContent: "center"}}>
                <AuthModal/>
            </div>
        </>

    );
};
export default AuthPage;

