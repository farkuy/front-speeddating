import {createBrowserRouter} from "react-router-dom";
import {App} from "../App";
import Auth from "./pages/Auth/Auth";
import {RegistrationProfileForm} from "./pages/RegistrationProfileForm/RegistrationProfileForm";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/auth",
        element: <Auth/>,
    },
    {
        path: "/reg_profile",
        element: <RegistrationProfileForm/>,
    },
    {
        path: "*",
        element: <App/>,
    }
]);