import React, {Component, useId} from 'react';
import {IInputForAuth} from "../../entities/Auth/components/model";
import {ErrorMessage} from "../ErrorMessage";
// @ts-ignore
import style from "./style.module.css"

type InputProps<
    Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'input'
> = {
    label?: string;
    component?: Component;
    err_message?: string; // Дубликать error, однако это позволяет больше не писать несколько инпутов
} & React.ComponentProps<Component> & IInputForAuth;

export const Input = (allProps: InputProps,) => {

    const { label = '', error, id, component, err_message = '', register,  ...props } = allProps;

    const uniqueId = useId() ?? id;
    const Component  = component || 'input';

    return (
        <div style={{display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: 'center'}}>
            {
                label && (
                    <label htmlFor={uniqueId}>
                        {label}
                    </label>
                )
            }
            <Component
                className={style.input_style}
                {...register}
                {...props}
                id={uniqueId}
            />
            <ErrorMessage
                error={error}
                err_message={err_message}
            />
        </div>
    );
};

