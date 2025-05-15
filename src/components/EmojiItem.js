import React from 'react';

export default function EmojiItem({ emoji, count, onVote }) {
    const handleClick = () => {
        onVote(emoji);
    };

    return (
        <button onClick={handleClick} style={{ fontSize: '2rem', margin: '10px', cursor: 'pointer' }}>
            {emoji} ({count})
        </button>
    );
}
