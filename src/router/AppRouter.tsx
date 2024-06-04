import React from 'react';
import {Route, Routes} from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import StartPage from "./pages/StartPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="*" element={<StartPage/>}/>
        </Routes>
    );
};

export default AppRouter;