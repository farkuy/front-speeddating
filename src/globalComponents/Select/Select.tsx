import React, {FC, MouseEventHandler, useState} from 'react';
import {IOption, ISelectProps} from "./models";
import styles from "./style.module.css"
import { Option } from "./components/Option"
import { AnimatePresence, motion} from "framer-motion";
export const Select: FC<ISelectProps> = ( props ) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = (value: IOption["value"]) => {
        setIsOpen(false);
        onChange?.(value);
    };
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev);
    };

    const { selected, options, placeholder, onChange, onClose } = props;

    return (
        <div className={styles.container_select}>
            <motion.div>
                <AnimatePresence>
                    {isOpen ? (
                        <motion.div
                            layout={"size"}
                            initial={{
                                height: 0,
                            }}
                            animate={{
                                height: "auto",
                            }}
                            exit={{
                                height: 0,
                            }}
                            transition={{ duration: 0.2 }}
                            className={`flex flex-col text-white overflow-hidden absolute bottom-[100%] w-[100%] left-0 `}
                        >
                            <div className={"bg-bz-blue-gr-start"}>
                                {isOpen && (
                                    <ul>
                                        {options.map((option) => (
                                            <Option
                                                key={option.value}
                                                title={option.title}
                                                value={option.value}
                                            />
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
                <div
                    className={`flex cursor-pointer items-center p-[4px] flex-row bg-bz-blue-dark transition-colors text-[14px] font-medium duration-300`}
                    onClick={handlePlaceHolderClick}
                >
                    <div className={"mr-[5px]"}>
                        {selected?.title || placeholder}
                    </div>
                    <div>
                        {isOpen ? (
                            <div> Вверх </div>

                        ) : (
                            <div> Вниз </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

