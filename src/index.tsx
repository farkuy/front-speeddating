import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from "./imports";
import {RouterProvider} from "react-router-dom";
import "./index.module.css"
import RootStore from "./store/root-store";
import RootStoreContext from "./root-store-context"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
      <RootStoreContext.Provider value={new RootStore()}>
          <RouterProvider router={router}/>
      </RootStoreContext.Provider>
  </React.StrictMode>
);


