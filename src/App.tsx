import React, {useContext, useEffect, useMemo} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "./index";

export const App =  observer(() => {

    const { user } = useContext(Context)

    useMemo(async () => {
        const token = localStorage.getItem('token')
        if (token) {
            await user.checkAuth(token)
            console.log(user.user, user.isAuth)
        }
    }, [])

    return (
    <div className="App">
      page
    </div>
  );
})



