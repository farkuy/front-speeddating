import React, {FC} from 'react';
import {IInputForAuth} from "./model";

export const InputForAuth:FC<IInputForAuth> = (
    {
        placeholder,
        typeInputForSignUp = 'text',
        testId,
        errorTestId,
        error,
        register
    }
) => {
    return (
        <div>
            <input
                type={typeInputForSignUp}
                data-testid={testId}
                placeholder={placeholder}
                {...register}
            />
            {error && (
                <div
                    data-testid={errorTestId}
                >
                    {error.message}
                </div>
            )}
        </div>
    );
};

