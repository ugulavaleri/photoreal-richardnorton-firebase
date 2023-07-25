import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./context/globalContext";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <GlobalContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GlobalContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
