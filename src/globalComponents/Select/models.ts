export interface IOption {
    title: string | number;
    value: number;
}
export interface ISelectProps {
    selected: IOption;
    options: IOption[];
    placeholder?: string;
    onChange?: (selected: IOption["value"]) => void;
    onClose?: () => void;
}