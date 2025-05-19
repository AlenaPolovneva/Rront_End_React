import React, { useContext } from "react";
import { SmilesProvider, SmilesContext } from "./context/SmilesContext";
import Header from "./components/Header";
import Smiles from "./components/Smiles";
import Footer from "./components/Footer";

function AppContent() {
    const { theme } = useContext(SmilesContext);

    const appStyle = {
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#eee",
        minHeight: "100vh",
        padding: "20px",
    };

    return (
        <div style={appStyle}>
            <Header />
            <Smiles />
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <SmilesProvider>
            <AppContent />
        </SmilesProvider>
    );
}