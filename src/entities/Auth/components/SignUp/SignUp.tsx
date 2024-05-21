import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {FormSchemaSigUp, signUpSchema} from "../../schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {registration} from "../../../../http/userApi";
import {signUpField} from "../model";
import {Input} from "../../../../globalComponents/Input/Input";

export const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        trigger,
        formState: { isDirty, isSubmitting, errors },}
        = useForm<FormSchemaSigUp>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: '',
        }
    });

    const registerSubmit: SubmitHandler<FormSchemaSigUp> = async (data) => {
        const response = await registration(data.email, data.password);
        console.log(response)
    }

    return (
        <form
            onSubmit={handleSubmit(registerSubmit)}
        >
            {
                signUpField.map((item, index) => {
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
            <button>Регистрация</button>
        </form>
    );
}

