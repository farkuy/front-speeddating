import {ChangeHandler, FieldError} from "react-hook-form";
import React from "react";
import {IForTest} from "../../../models/models";

export enum TypeInput {
    text = 'text',
    password = 'password',
    number = "number",
}

interface IRegisterHook {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
    ref: React.Ref<any>;
}

export interface IInputForAuth extends IForTest{
    placeholder?: string,
    typeInput?: TypeInput,
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
    type: TypeInput,
}

export const signInField: IFieldSign[] = [
    {
        name: NameIFiendAuth.email,
        placeholder: 'Введите ваш email',
        type: TypeInput.text,
    },
    {
        name: NameIFiendAuth.password,
        placeholder: 'Введите пароль',
        type: TypeInput.password,
    },
]

export const signUpField: IFieldSign[] = [
    {
        name: NameIFiendAuth.email,
        placeholder: 'Ваш email',
        type: TypeInput.text,
    },
    {
        name: NameIFiendAuth.password,
        placeholder: 'Ваш пароль',
        type: TypeInput.password,
    },
    {
        name: NameIFiendAuth.repeatPassword,
        placeholder: 'Ваш пароль',
        type: TypeInput.password,
    },
]