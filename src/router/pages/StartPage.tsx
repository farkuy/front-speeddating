import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {useCheckAuth} from "../../hooks/useCheckAuth";
import {Context} from "../../index";

const StartPage = observer(() => {

    const { user } = useContext(Context)
    const checkAuth = useCheckAuth();

    return (
        <div>
            Стартовая епт
        </div>
    );
});

export default StartPage;