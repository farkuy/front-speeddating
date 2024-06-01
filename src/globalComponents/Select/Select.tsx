import React, {FC} from 'react';
import {SelectProps} from "./models";
import styles from "./style.module.css"
import {Option, SelectButton} from "./index"
import {AnimatePresence, motion} from "framer-motion";
import {clsx} from "clsx";
import {useChangeSelect} from "./hooks/useChangeSelect";

export const Select: FC<SelectProps> = ( props ) => {

    const { selected, options, placeholder, onChange } = props;

    const {
        isOpen,
        openOptions,
        selectOption
    } = useChangeSelect({onChange})

    return (
        <div className={styles.container_select}>
            <SelectButton
                placeholder={placeholder}
                handlePlaceHolderClick={openOptions}
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
                                    handleOptionClick={selectOption}
                                />
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

