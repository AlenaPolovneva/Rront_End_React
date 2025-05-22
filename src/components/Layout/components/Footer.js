import React, { useContext } from "react";
import { SmilesContext } from "../../../context/SmilesContext";

export default function Footer() {
    const { onClear, toggleTheme } = useContext(SmilesContext);

    return (
        <footer style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
            <button onClick={() => onClear()}>Clear Votes</button>
            <button onClick={() => toggleTheme()}>Change</button>
        </footer>

    );
}