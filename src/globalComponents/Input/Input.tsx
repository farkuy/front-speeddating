import React, {Component, useId} from 'react';

interface InputProps {
    label?: string;
    error?: string;
    placeholder?: string;
    id?: number;
    component?: React.ComponentType<any>;
    ref?: React.Ref<HTMLElement | null>;
    value?: string;
}

export const Input = (
    { label = '', error = '', id, ref,  component, placeholder = '', value = '',  ...props }: InputProps,
) => {

    const uniqueId = useId() ?? id;
    const Component  = component || 'input';

    return (
        <div>
            {
                label && (
                    <label htmlFor={uniqueId}>
                        {label}
                    </label>
                )
            }
            <Component
                {...props}
                id={uniqueId}
            />
            { error && (<p>{error}</p>) }
        </div>
    );
};

