import React from "react";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { SmilesProvider } from "./context/SmilesContext";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./index.css";

export default function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <SmilesProvider>
                        <App />
                    </SmilesProvider>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
}