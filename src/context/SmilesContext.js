import  { createContext, useState, useEffect } from "react";
import { loadVotes, saveVotes, clearVotes } from "../utils/LocalStorage";
import {defaultSmiles} from "../data/SmileDefault";

export const SmilesContext = createContext();

export function SmilesProvider({ children }) {
    const [smiles, setSmiles] = useState(() => loadVotes() || defaultSmiles);
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        saveVotes(smiles);
    }, [smiles]);

    const handleVote = (id) => {
        const updated = smiles.map((item) =>
            item.id === id ? { ...item, votes: item.votes + 1 } : item
        );
        setSmiles(updated);
    };

    const handleClear = () => {
        const cleared = smiles.map((item) => ({ ...item, votes: 0 }));
        setSmiles(cleared);
        clearVotes();
    };

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <SmilesContext.Provider
            value={{ smiles, theme, onVote: handleVote, onClear: handleClear, toggleTheme }}
        >
            {children}
        </SmilesContext.Provider>
    );
}
