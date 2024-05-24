import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {useCheckAuth} from "./hooks/useCheckAuth";
import {NavBar} from "./globalComponents/NavBar/NavBar";

export const App = observer(() => {

    const { user } = useContext(Context)
    const checkAuth = useCheckAuth();

    return (
    <div className="App">
        <NavBar/>
        <div>
            {user.user && <div>{user.user.email}</div>}
            page
        </div>
    </div>
  );
})



