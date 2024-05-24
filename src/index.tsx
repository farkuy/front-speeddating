import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {router} from "./imports";
import {RouterProvider} from "react-router-dom";
import "./index.module.css"
import UserStore from "./store/userStore/UserStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
interface IUser {
    user: UserStore
}
const user = new UserStore();
export const Context = createContext<IUser>({
    user
})

root.render(

  <React.StrictMode>
      <Context.Provider value={{
          user
      }}>
          <RouterProvider router={router}/>
      </Context.Provider>
  </React.StrictMode>
);


