import React, {FC, useMemo} from 'react';
import styles from "./style.module.css";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";
import {IOption} from "../../models";

interface SelectButtonProps {
    placeholder?: string,
    handlePlaceHolderClick: () => void;
    isOpen: boolean,
    selected: IOption,
}

export const SelectButton:FC<SelectButtonProps> = ( props ) => {

    const { placeholder, handlePlaceHolderClick, isOpen, selected} = props;

    const icon = useMemo(() => {
        if (isOpen) {
            return <SlArrowUp/>
        }
        return <SlArrowDown/>
    }, [isOpen])

    return (
        <div
            className={styles.btn_select}
            onClick={handlePlaceHolderClick}
        >
            <div>
                { selected.title || placeholder }
            </div>
            <div>
                { icon }
            </div>
        </div>
    );
};

