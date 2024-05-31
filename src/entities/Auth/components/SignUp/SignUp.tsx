import React, {useContext} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {FormSchemaSigUp, signUpSchema} from "../../schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {signUpField} from "../model";
import {Input} from "../../../../globalComponents/Input/Input";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import {useNavigate} from "react-router-dom";

export const SignUp = observer(() => {

    const { user } = useContext(Context)
    const history = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },}
        = useForm<FormSchemaSigUp>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: '',
        }
    });

    const registerSubmit: SubmitHandler<FormSchemaSigUp> = async (data) => {
        await user.registration(data.email, data.password);
        history("/filling_profile")
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
                            register={register(item.name)}
                            typeInput={item.type}
                            testId={`test_login_${item.name}`}
                            errorTestId={`test_error_login_${item.name}`}
                            error={errors[item.name]}
                            key={item.name}
                        />
                    )
                })
            }
            <button>Регистрация</button>
        </form>
    );
})

