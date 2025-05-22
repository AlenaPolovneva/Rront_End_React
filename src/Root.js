import { ThemeProvider } from "./context/ThemeContext";
import { SmilesProvider } from "./context/SmilesContext";
import { BrowserRouter } from "react-router";
import App from "./App";

export default function Root() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <SmilesProvider>
                    <App />
                </SmilesProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}