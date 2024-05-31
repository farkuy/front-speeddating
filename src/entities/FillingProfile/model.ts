import {TypeInput} from "../Auth/components/model";

enum NameIFillingProfile {
    sex = 'sex',
    age = 'age',
    hobbies = 'hobbies',
    about_yourself = 'about_yourself',
}
interface IFillingProfile {
    name: NameIFillingProfile,
    placeholder: string,
    type: TypeInput,
}

export const fillingProfile: IFillingProfile[] = [
    {
        name: NameIFillingProfile.sex,
        placeholder: "Введите предпочитаемый пол",
        type: TypeInput.text,
    },
    {
        name: NameIFillingProfile.age,
        placeholder: "Введите свой возраст",
        type: TypeInput.number,
    },
    {
        name: NameIFillingProfile.hobbies,
        placeholder: "Введите свои хобби через запятую",
        type: TypeInput.text,
    },
    {
        name: NameIFillingProfile.about_yourself,
        placeholder: "Расскажите немного о себе",
        type: TypeInput.text,
    },
];