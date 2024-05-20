import React from 'react';
import {FormSchemaSigIn, signInSchema} from "../../schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {signInField} from "../model";
import {Input} from "../../../../globalComponents/Input/Input";

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

    const registerSubmit: SubmitHandler<FormSchemaSigIn> = (data) => {
        alert('Вы вошли')
    };

    return (
        <form
            onSubmit={handleSubmit(registerSubmit)}
            style={{width: '400px', height: '250px'}}
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
            <button>Войти</button>
        </form>
    );
};

