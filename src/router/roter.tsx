import {createBrowserRouter} from "react-router-dom";
import {App} from "../App";
import AuthPage from "./pages/Auth/AuthPage";
import {FillingProfilePage} from "./pages/FillingProfile/FillingProfilePage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/auth",
        element: <AuthPage/>,
    },
    {
        path: "/filling_profile",
        element: <FillingProfilePage/>,
    },
    {
        path: "*",
        element: <App/>,
    }
]);