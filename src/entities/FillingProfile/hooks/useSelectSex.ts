import React, {useState} from 'react';
import {sexCount} from "../model";
import {IOption} from "../../../globalComponents/Select/models";

export const useSelectSex = () => {

    const [selectedSex, setSelectedSex] = useState(sexCount[0]);

    const handleSexChange = (selected: IOption["value"]) => {
        const selectedOption = sexCount.find((option) => option.value === selected);
        setSelectedSex(selectedOption || sexCount[0]);
    };

    return { selectedSex, handleSexChange };
};

