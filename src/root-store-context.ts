import {createContext, useContext} from "react";
import RootStore from "./store/root-store";

const RootStoreContext = createContext<RootStore | null>(null);

export const useStore = () => {
    const context = useContext(RootStoreContext);

    if (context === null) {
        throw new Error('')
    }

    return context;
}

export default RootStoreContext