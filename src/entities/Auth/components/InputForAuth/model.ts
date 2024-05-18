import React from "react";
import {ChangeHandler, FieldError} from "react-hook-form";
import {IForTest} from "../../../../models";

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
    typeInputForSignUp: TypeInputAuth,
    error?: FieldError,
    register: IRegisterHook,
}