import React, {FC, useMemo} from 'react';
import styles from "./style.module.css";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";

interface SelectButtonProps {
    placeholder?: string,
    handlePlaceHolderClick: () => void;
    isOpen: boolean
}

export const SelectButton:FC<SelectButtonProps> = ( props ) => {

    const { placeholder, handlePlaceHolderClick, isOpen} = props;

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
                { placeholder }
            </div>
            <div>
                { icon }
            </div>
        </div>
    );
};

