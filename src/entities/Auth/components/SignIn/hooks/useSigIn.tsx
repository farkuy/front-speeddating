import React, {useContext} from 'react';
import {Context} from "../../../../../index";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormSchemaSigIn, signInSchema} from "../../../schema";
import {zodResolver} from "@hookform/resolvers/zod";

export const useSigIn = () => {
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

    const loginSubmit: SubmitHandler<FormSchemaSigIn> = async (data) => {
        await user.login(data.email, data.password);
        console.log(user.user, user.user?.user_profile)

        if (!user.user?.user_profile) {
            console.log(user.user, user.user?.user_profile)
            history("/filling_profile")
        }
    }
    return {
        register,
        errors,
        handleSubmit,
        loginSubmit
    };
};

