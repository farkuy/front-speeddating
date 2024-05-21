import React from 'react';
import {FormSchemaSigIn, signInSchema} from "../../schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {signInField} from "../model";
import {Input} from "../../../../globalComponents/Input/Input";
import {login, registration} from "../../../../http/userApi";

export const SignIn = () => {

    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        trigger,
        formState: { isDirty, isSubmitting, errors },}
        = useForm<FormSchemaSigIn>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const registerSubmit: SubmitHandler<FormSchemaSigIn> = async (data) => {
        const response = await login(data.email, data.password);
        console.log(response)
    }

    return (
        <div
            ///onSubmit={handleSubmit(registerSubmit)}
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
                        />
                    )
                })
            }
            <button
                onClick={async () => await signIn()}
            >Войти</button>
        </div>
    );
};

