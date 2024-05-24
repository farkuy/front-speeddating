import {ChangeHandler, FieldError} from "react-hook-form";
import React from "react";
import {IForTest} from "../../../models/models";

export enum TypeInputAuth {
    text = 'text',
    password = 'password',
}

interface IRegisterHook {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
    ref: React.Ref<any>;
}

export interface IInputForAuth extends IForTest{
    placeholder?: string,
    typeInputForSignUp?: TypeInputAuth,
    error?: FieldError,
    register?: IRegisterHook,
}

enum NameIFiendAuth {
    email = 'email',
    password = 'password',
    repeatPassword = 'repeatPassword',
}

interface IFieldSign {
    name: NameIFiendAuth,
    placeholder: string,
    type: TypeInputAuth,
}

export const signInField: IFieldSign[] = [
    {
        name: NameIFiendAuth.email,
        placeholder: 'Введите ваш email',
        type: TypeInputAuth.text,
    },
    {
        name: NameIFiendAuth.password,
        placeholder: 'Введите пароль',
        type: TypeInputAuth.password,
    },
]

export const signUpField: IFieldSign[] = [
    {
        name: NameIFiendAuth.email,
        placeholder: 'Ваш email',
        type: TypeInputAuth.text,
    },
    {
        name: NameIFiendAuth.password,
        placeholder: 'Ваш пароль',
        type: TypeInputAuth.password,
    },
    {
        name: NameIFiendAuth.repeatPassword,
        placeholder: 'Ваш пароль',
        type: TypeInputAuth.password,
    },
]