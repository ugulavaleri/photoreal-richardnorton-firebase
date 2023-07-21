import { createContext, useState } from "react";
import { useAddPost } from "../hooks/useAddPost";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    // unda sheinaxos lokalurad
    const [currentPostId, setCurrentPostId] = useState(null);
    const { state, dispatch } = useAddPost();

    return (
        <GlobalContext.Provider
            value={{ state, dispatch, currentPostId, setCurrentPostId }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
