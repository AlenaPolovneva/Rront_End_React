import { useContext } from "react";

import { SmilesContext } from "../../context/SmilesContext";

import EmojiItem from "./EmojiItem";

export default function Smiles() {
    const { smiles, onVote } = useContext(SmilesContext);

    return (
        <ul>
            {smiles.map(({ id, smile, votes }) => (
                <EmojiItem
                    key={id}
                    id={id}
                    smile={smile}
                    votes={votes}
                    onVote={onVote}
                />
            ))}
        </ul>
    );
}