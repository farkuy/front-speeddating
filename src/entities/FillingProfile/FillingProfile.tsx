import React, {useEffect} from 'react';
import {fillingProfile, sexCount} from "./model";
import {Input} from "../../globalComponents/Input/Input";
import {Select} from "../../globalComponents/Select/Select";
import {useSelectSex} from "./hooks/useSelectSex";
import {useFillingProfile} from "./hooks/useFillingProfile";

export const FillingProfile = () => {

    const { selectedSex, handleSexChange } = useSelectSex();

    const {
        register,
        errors,
        handleSubmit,
        fillingProfileSubmit
    } = useFillingProfile({selectedSex})


    useEffect(() => {
        console.log(register("age"))
    }, [register("age")])

    return (
        <form
            onSubmit={handleSubmit(fillingProfileSubmit)}
        >
            <Select
                selected={selectedSex}
                options={sexCount}
                placeholder={"Ваш пол"}
                onChange={handleSexChange}
            />
            {
                fillingProfile.map((item, index) => {
                    return (
                        <Input
                            placeholder={item.placeholder}
                            register={register(item.name)}
                            type={item.type}
                            testId={`test_filling_profile_${item.name}`}
                            errorTestId={`test_error_filling_profile_${item.name}`}
                            error={errors[item.name]}
                            key={item.name}
                        />
                    )
                })
            }
            <button>Создать профиль</button>
        </form>
    );
};

