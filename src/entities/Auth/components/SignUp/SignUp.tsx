import React, {useContext} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {FormSchemaSigUp, signUpSchema} from "../../schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {signUpField} from "../model";
import {Input} from "../../../../globalComponents/Input/Input";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";

export const SignUp = observer(() => {

    const { user } = useContext(Context)

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
        await user.registration(data.email, data.password)
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
})

