import React, {ReactNode} from 'react';
import styles from "./style.module.css"
interface ModalProps {
    label?: string;
    id?: number;
    children?: ReactNode;
}

export const Modal = (
    {label = "", id, children}: ModalProps
) => {
    return (
        <div
            className={styles.modal}
        >
            { label && (<div className={styles.title}>{ label }</div>)}
            { children }
        </div>
    );
};

