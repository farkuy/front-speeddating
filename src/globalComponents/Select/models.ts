export interface IOption {
    title: string | number;
    value: string | number;
}
export interface SelectProps {
    selected: IOption;
    options: IOption[];
    placeholder?: string;
    onChange?: (selected: IOption["value"]) => void;
    onClose?: () => void;
}