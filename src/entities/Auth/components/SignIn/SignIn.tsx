import React, {useContext} from 'react';
import {FormSchemaSigIn, signInSchema} from "../../schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {signInField} from "../model";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import {Input} from "../../../../globalComponents/Input/Input";
import {useNavigate} from "react-router-dom";

export const SignIn = observer(() => {

    const { user } = useContext(Context)
    const history = useNavigate();

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
        await user.login(data.email, data.password);
        console.log(user.user, user.user?.user_profile)
        if (!user.user?.user_profile) {
            console.log(user.user, user.user?.user_profile)
            history("/filling_profile")
        }
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

