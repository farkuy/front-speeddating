import {useContext, useEffect, useState} from "react";
import {Context} from "../index";

export const useCheckAuth = async () => {
    const { user } = useContext(Context);
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !isAuthChecked) {
            user.checkAuth(token);
            setIsAuthChecked(true);
        }
    }, [user]);

    return isAuthChecked;
};

