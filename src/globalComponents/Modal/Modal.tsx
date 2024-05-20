import React, {ReactNode} from 'react';
import styles from "./style.module.css"
interface ModalProps {
    label?: string;
    id?: number;
    children?: ReactNode;
}

export const Modal = (props: ModalProps) => {

    const { label = "", id, children } = props;

    return (
        <div className={styles.modal}>
            { label && (<div className={styles.title}>{ label }</div>)}
            { children }
        </div>
    );
};

