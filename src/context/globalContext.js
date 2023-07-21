import { createContext, useState, useEffect } from "react";
import { useAddPost } from "../hooks/useAddPost";
import { UseFetch } from "../hooks/useFetch";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const { state, dispatch } = useAddPost();

    // save locally to not dissapear after refresh.
    const [currentPostId, setCurrentPostId] = useState([
        JSON.parse(localStorage.getItem("currentPostId")),
    ]);

    useEffect(() => {
        localStorage.setItem("currentPostId", JSON.stringify(currentPostId));
    }, [currentPostId]);

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
