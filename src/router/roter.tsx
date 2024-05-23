import Auth from "./pages/Auth";
import {createBrowserRouter} from "react-router-dom";
import {App} from "../App";

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
        path: "*",
        element: <App/>,
    }
]);