import React, {FC, useState} from 'react';
import {IOption, SelectProps} from "./models";
import styles from "./style.module.css"
import {Option, SelectButton} from "./index"
import {AnimatePresence, motion} from "framer-motion";
import {clsx} from "clsx";

export const Select: FC<SelectProps> = ( props ) => {

    const { selected, options, placeholder, onChange, onClose } = props;

    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = (value: IOption["value"]) => {
        setIsOpen(false);
        onChange?.(value);
    };
    const handlePlaceHolderClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container_select}>
            <SelectButton
                placeholder={placeholder}
                handlePlaceHolderClick={handlePlaceHolderClick}
                isOpen={isOpen}
                selected={selected}
            />
            <AnimatePresence>
                { isOpen && (
                    <motion.div
                        initial={{height: 0}}
                        animate={{height: "auto"}}
                        exit={{height: 0}}
                        transition={{ duration: 0.2 }}
                        className={clsx({
                            [styles.ul_container]: true,
                        })}
                    >
                        <ul>
                            {options.map((option) => (
                                <Option
                                    key={option.value}
                                    title={option.title}
                                    value={option.value}
                                    handleOptionClick={handleOptionClick}
                                />
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

