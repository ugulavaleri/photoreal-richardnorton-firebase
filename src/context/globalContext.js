import { createContext, useState } from "react";
import { UseFetchPosts } from "../hooks/useFetchPosts";

export const GlobalContext = createContext();

const currentDate = `${new Date().getDate()}.${
    new Date().getMonth() < 10
        ? "0" + new Date().getMonth()
        : new Date().getMonth()
}.${new Date().getFullYear()}`;

export const GlobalContextProvider = ({ children }) => {
    const [currentPostId, setCurrentPostId] = useState(null);
    const { isLoading, wholeList, setWholeList } = UseFetchPosts();

    return (
        <GlobalContext.Provider
            value={{
                currentPostId,
                setCurrentPostId,
                currentDate,
                isLoading,
                wholeList,
                setWholeList,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
