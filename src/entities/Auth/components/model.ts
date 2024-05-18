import {TypeInputAuth} from "./InputForAuth/model";
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