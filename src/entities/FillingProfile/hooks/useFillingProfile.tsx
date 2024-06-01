import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {fillingProfileSchema, FormSchemaFillingProfileSchema} from "../schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {IOption} from "../../../globalComponents/Select/models";

interface useFillingProfileProps {
    selectedSex: IOption
}

export const useFillingProfile = ( props: useFillingProfileProps ) => {

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
        console.log("Профиль", data, selectedSex)
        alert("Все готово")
    }

    return {
        register,
        errors,
        handleSubmit,
        fillingProfileSubmit
    };
};

