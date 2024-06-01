import React, {FC} from "react";
import {IOption} from "../../models";
import styles from "./style.module.css"

interface OptionProps extends IOption {
    handleOptionClick: (value: IOption["value"]) => void,
}
export const Option:FC<OptionProps> = (props) => {

    const { title, value, handleOptionClick } = props;

    return (
        <li
            className={styles.option}
            value={value}
            onClick={() => handleOptionClick(value)}
            tabIndex={0}
        >
            {title}
        </li>
    );
};

