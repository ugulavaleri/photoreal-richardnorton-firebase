import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [currentPostId, setCurrentPostId] = useState([]);

    console.log(currentPostId);
    return (
        <GlobalContext.Provider value={{ currentPostId, setCurrentPostId }}>
            {children}
        </GlobalContext.Provider>
    );
};
