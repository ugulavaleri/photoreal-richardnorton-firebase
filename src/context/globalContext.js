import { createContext, useState } from "react";
import { useAddPost } from "../hooks/useAddPost";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const { state, dispatch } = useAddPost();
    const [currentPostId, setCurrentPostId] = useState(null);

    return (
        <GlobalContext.Provider
            value={{
                state,
                dispatch,
                currentPostId,
                setCurrentPostId,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
