import React from "react";
import ThemeToggle from "../context/ThemeToggle";

export default function Header() {
    return (
        <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <h1>Emoji Voting SPA</h1>
            <ThemeToggle />
        </header>
    );
}