import { useContext } from "react";

import Index from "./pages/smiles/components";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { ThemeContext } from "./context/ThemeContext";

export default function App() {
    const { theme } = useContext(ThemeContext);

    const appStyle = {
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#eee",
        minHeight: "100vh",
        padding: "20px",
    };

    return (
        <div style={appStyle}>
            <Header />
            <Index />
            <Footer />
        </div>
    );
}