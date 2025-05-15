import React from 'react';
import EmojiItem from './EmojiItem';

export default function EmojiList({ items, votes, onVote }) {
    return (
        <div style={{ margin: '20px 0' }}>
            {items.map(item => (
                <EmojiItem
                    key={item.id}
                    emoji={item.smile}
                    count={votes[item.smile] || 0}
                    onVote={onVote}
                />
            ))}
        </div>
    );
}
