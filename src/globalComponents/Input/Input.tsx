import React, {Component, useId} from 'react';
import {IInputForAuth} from "../../entities/Auth/components/model";
import {ErrorMessage} from "../ErrorMessage";

type InputProps<
    Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'input'
> = {
    label?: string;
    component?: Component;
    err_message?: string; // Дубликать error, однако это позволяет больше не писать несколько инпутов
} & React.ComponentProps<Component> & IInputForAuth;

export const Input = (
    { label = '', error, id, component, err_message = '',  ...props }: InputProps,
) => {

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

