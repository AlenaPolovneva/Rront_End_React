import  { createContext, useState, useEffect } from "react";
import { loadVotes, saveVotes, clearVotes } from "../utils/LocalStorage";
import { defaultSmiles } from "../data/SmileDefault";

export const SmilesContext = createContext(null);

export function SmilesProvider({ children }) {
    const [smiles, setSmiles] = useState(() => loadVotes() || defaultSmiles);

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

    return (
        <SmilesContext.Provider
            value={{ smiles, onVote: handleVote, onClear: handleClear }}
        >
            {children}
        </SmilesContext.Provider>
    );
}
