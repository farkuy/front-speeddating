import React, {FC} from 'react';
import {ISelectProps} from "./models";
import styles from "./style.module.css"
export const Select: FC<ISelectProps> = ( props ) => {

    const { selected, options, placeholder, onChange, onClose } = props;

    return (
        <div className={styles.container_select}>

        </div>
    );
};

