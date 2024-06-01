import {TypeInput} from "../Auth/components/model";
import {IOption} from "../../globalComponents/Select/models";
import {ISex} from "../../store/userStore/schema";

enum NameIFillingProfile {
    sex = 'sex',
    age = 'age',
    about_yourself = 'about_yourself',
}
interface IFillingProfile {
    name: NameIFillingProfile,
    placeholder: string,
    type: TypeInput,
}

export const fillingProfile: IFillingProfile[] = [
    {
        name: NameIFillingProfile.age,
        placeholder: "Введите свой возраст",
        type: TypeInput.number,
    },
    {
        name: NameIFillingProfile.about_yourself,
        placeholder: "Расскажите немного о себе",
        type: TypeInput.text,
    },
];

export const sexCount: IOption[] = [
    { title: ISex.MALE, value: ISex.MALE },
    { title: ISex.FEMALE, value: ISex.FEMALE },
];