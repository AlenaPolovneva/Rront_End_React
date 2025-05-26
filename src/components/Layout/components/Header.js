import { NavLink } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import ThemeToggle from "../../ThemeToggle";

export default function Header() {
    const { theme } = useContext(ThemeContext);

    const appStyle = {
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#eee",
        minHeight: "60px",
        padding: "20px",
        display: "flex",
        gap: "20px",
        alignItems: "center"
    };

    return (
        <>
            <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                <h1>Emoji Voting SPA</h1>
                <ThemeToggle />
            </header>

            <div style={appStyle}>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "non-active"}
                         to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "non-active"}
                         to="/contacts">Contacts</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "non-active"}
                         to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "non-active"}
                         to="/todo">Todo</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "non-active"}
                         to="/CounterRedux">Counter *</NavLink>
            </div>
        </>
    );
}