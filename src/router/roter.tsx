import Auth from "./pages/Auth";
import App from "../App";
import {createBrowserRouter} from "react-router-dom";

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