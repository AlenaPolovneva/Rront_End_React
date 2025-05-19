import React, { createContext} from "react";
import {SmilesContext} from "./SmilesContext";

export default function ThemeToggle({children}) {
    const { theme, toggleTheme } = createContext(SmilesContext);

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
            {children}
        </button>
    );
}
