import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {useCheckAuth} from "./hooks/useCheckAuth";

export const App = observer(() => {

    const { user } = useContext(Context)
    const checkAuth = useCheckAuth();

    return (
    <div className="App">
        {user.user && <div>{user.user.email}</div>}
        page
    </div>
  );
})



