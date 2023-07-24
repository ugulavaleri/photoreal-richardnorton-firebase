import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./context/globalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalContextProvider>
    </React.StrictMode>
);
