import React from 'react';
import {FieldError} from "react-hook-form";
import {IForTest} from "../../models";
import styles from "./error.module.css";
interface ErrorMessageProps extends IForTest{
    error?: FieldError,
    err_message?: string, // Дубликать error, однако это позволяет больше не писать несколько инпутов
}

export const ErrorMessage = (props: ErrorMessageProps) => {

    const { error, err_message } = props;

    return (
        <div className={styles.error_message}>
            { error && (<p> {error.message} </p>) }
            { err_message && (<p> {err_message} </p>)}
        </div>
    );
};

