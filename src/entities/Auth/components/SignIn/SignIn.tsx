import React from 'react';
import {signInField} from "../model";
import {observer} from "mobx-react-lite";
import {Input} from "../../../../globalComponents/Input/Input";
import {useSigIn} from "./hooks/useSigIn";

export const SignIn = observer(() => {

    const {
        register,
        errors,
        handleSubmit,
        loginSubmit
    } = useSigIn();

    return (
        <form
            onSubmit={handleSubmit(loginSubmit)}
        >
            {
                signInField.map((item, index) => {
                    return (
                        <Input
                            placeholder={item.placeholder}
                            register={register(item.name as "email" | "password")}
                            type={item.type}
                            testId={`test_login_${item.name}`}
                            errorTestId={`test_error_login_${item.name}`}
                            error={errors[item.name as "email" | "password"]}
                            key={item.name}
                        />
                    )
                })
            }
            <button>Войти</button>
        </form>
    );
});

