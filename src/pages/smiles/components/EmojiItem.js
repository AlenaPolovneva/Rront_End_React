import React from "react";

export default function EmojiItem({ id, smile, votes, onVote }) {
    return (
        <li style={{ margin: "10px 0" }}>
            <span style={{ fontSize: "2rem", marginRight: "1rem" }}>{smile}</span>
            <button onClick={() => onVote(id)}>
                Vote ({votes})
            </button>
        </li>
    );
}