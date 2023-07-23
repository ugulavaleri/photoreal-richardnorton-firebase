import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [currentPostId, setCurrentPostId] = useState(null);

    const currentDate = `${new Date().getDate()}.${
        new Date().getMonth() < 10
            ? "0" + new Date().getMonth()
            : new Date().getMonth()
    }.${new Date().getFullYear()}`;

    return (
        <GlobalContext.Provider
            value={{
                currentPostId,
                setCurrentPostId,
                currentDate,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
