import React, {useContext} from 'react';
import {FormSchemaSigIn, signInSchema} from "../../schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {signInField} from "../model";
import {Input} from "../../../../globalComponents/Input/Input";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";

export const SignIn = observer(() => {

    const { user } = useContext(Context)

    const {
        register,
        handleSubmit,
        formState: { errors },}
        = useForm<FormSchemaSigIn>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const registerSubmit: SubmitHandler<FormSchemaSigIn> = async (data) => {
        await user.login(data.email, data.password)
    }

    return (
        <form
            onSubmit={handleSubmit(registerSubmit)}
        >
            {
                signInField.map((item, index) => {
                    return (
                        <Input
                            placeholder={item.placeholder}
                            register={register(item.name as "email" | "password")}
                            typeInputForSignUp={item.type}
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

