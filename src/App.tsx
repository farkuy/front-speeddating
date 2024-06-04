import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {useCheckAuth} from "./hooks/useCheckAuth";
import {NavBar} from "./globalComponents/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";

export const App = observer(() => {

    const { user } = useContext(Context)
    const checkAuth = useCheckAuth();

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
  );
})



