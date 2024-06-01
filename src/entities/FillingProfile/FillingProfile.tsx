import React, {useContext} from 'react';
import {fillingProfile} from "./model";
import {Input} from "../../globalComponents/Input/Input";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {fillingProfileSchema, FormSchemaFillingProfileSchema} from "./schema";
import {Select} from "../../globalComponents/Select/Select";
import {IOption} from "../../globalComponents/Select/models";
import {ISex} from "../../store/userStore/schema";

export const FillingProfile = () => {

    const { user } = useContext(Context)
    const history = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },}
        = useForm<FormSchemaFillingProfileSchema>({
        resolver: zodResolver(fillingProfileSchema),
        defaultValues: {
            sex: '',
            age: 18,
            about_yourself: '',
        }
    });

    const fillingProfileSubmit: SubmitHandler<FormSchemaFillingProfileSchema> = async (data) => {
        alert("Все готово")
    }

    const itemsCount: IOption[] = [
        { title: ISex.MALE, value: ISex.MALE },
        { title: ISex.FEMALE, value: ISex.FEMALE },
    ];


    return (
        <div>
            <form
                onSubmit={handleSubmit(fillingProfileSubmit)}
            >
                <Select
                    selected={itemsCount[0]}
                    options={itemsCount}
                    placeholder={"Ваш пол"}
                />
                {
                    fillingProfile.map((item, index) => {
                        return (
                            <Input
                                placeholder={item.placeholder}
                                register={register(item.name)}
                                type={item.type}
                                testId={`test_login_${item.name}`}
                                errorTestId={`test_error_login_${item.name}`}
                                error={errors[item.name]}
                                key={item.name}
                            />
                        )
                    })
                }
                <button>Создать профиль</button>
            </form>
        </div>
    );
};

