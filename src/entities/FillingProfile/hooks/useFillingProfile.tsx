import React, {useContext} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {fillingProfileSchema, FormSchemaFillingProfileSchema} from "../schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {IOption} from "../../../globalComponents/Select/models";
import {Context} from "../../../index";
import {ISex} from "../../../store/userStore/schema";

interface useFillingProfileProps {
    selectedSex: IOption
}

export const useFillingProfile = ( props: useFillingProfileProps ) => {
    const { user } = useContext(Context)
    const { selectedSex } = props;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormSchemaFillingProfileSchema>({
        resolver: zodResolver(fillingProfileSchema),
        defaultValues: {
            age: undefined,
            about_yourself: '',
        }
    });

    const fillingProfileSubmit: SubmitHandler<FormSchemaFillingProfileSchema> = async (data) => {
        const token = localStorage.getItem("token");
        if (token ) {
           await user.checkAuth(token);
           await user.getUserProfile();
        }
        await user.setUserProfile({
            age: data.age,
            sex: selectedSex.value as ISex,
            hobbies: ["гуляния", "катания"],
            about_yourself: data.about_yourself,
        })
        await user.getUserProfile();
        alert("Все готово")
    }

    return {
        register,
        errors,
        handleSubmit,
        fillingProfileSubmit
    };
};

