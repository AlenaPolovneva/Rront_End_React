import { ThemeProvider } from "./context/ThemeContext";
import { SmilesProvider } from "./context/SmilesContext";
import App from "./App";

export default function Root() {
    return (
        <ThemeProvider>
            <SmilesProvider>
                <App />
            </SmilesProvider>
        </ThemeProvider>
    );
}