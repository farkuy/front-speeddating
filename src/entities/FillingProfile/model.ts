import {TypeInputAuth} from "../Auth/components/model";

enum NameIFillingProfile {
    sex = 'sex',
    age = 'age',
    hobbies = 'hobbies',
    about_yourself = 'about_yourself',
}
interface IFillingProfile {
    name: NameIFillingProfile,
    placeholder: string,
    type: TypeInputAuth,
}

export const fillingProfile: IFillingProfile[] = [
    {
        name: NameIFillingProfile.sex,
        placeholder: "Введите предпочитаемый пол",
        type: TypeInputAuth.text,
    },
    {
        name: NameIFillingProfile.age,
        placeholder: "Введите свой возраст",
        type: TypeInputAuth.text,
    },
    {
        name: NameIFillingProfile.hobbies,
        placeholder: "Введите свои хобби через запятую",
        type: TypeInputAuth.text,
    },
    {
        name: NameIFillingProfile.about_yourself,
        placeholder: "Расскажите немного о себе",
        type: TypeInputAuth.text,
    },
];