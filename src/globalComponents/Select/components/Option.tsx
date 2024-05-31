import React, {FC} from "react";
import {IOption} from "../models";

export const Option:FC<IOption> = (props) => {

    const { title, value } = props;

    return (
        <li
            className={"cursor-pointer pl-[4px] hover:bg-bz-grey duration-300"}
            value={value}
            tabIndex={0}
        >
            {title}
        </li>
    );
};

