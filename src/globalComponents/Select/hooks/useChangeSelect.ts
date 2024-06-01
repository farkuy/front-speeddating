import {useState} from 'react';
import {IOption} from "../models";

interface useChangeSelectProps {
    onChange?: (selected: IOption["value"]) => void;
}

export const useChangeSelect = (props: useChangeSelectProps) => {

    const { onChange } = props;

    const [isOpen, setIsOpen] = useState(false);
    const selectOption = (value: IOption["value"]) => {
        setIsOpen(false);
        onChange?.(value);
    };
    const openOptions = () => {
        setIsOpen(!isOpen);
    };

    return {
        isOpen, selectOption, openOptions
    };
};

