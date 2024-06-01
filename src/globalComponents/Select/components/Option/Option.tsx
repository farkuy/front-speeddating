import React, {FC} from "react";
import {IOption} from "../../models";
import styles from "./style.module.css"
export const Option:FC<IOption> = (props) => {

    const { title, value } = props;

    return (
        <li
            className={styles.option}
            value={value}
            tabIndex={0}
        >
            {title}
        </li>
    );
};

