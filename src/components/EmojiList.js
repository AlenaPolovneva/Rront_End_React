import React, { Component } from 'react';
import EmojiItem from './EmojiItem';

class EmojiList extends Component {
    render() {
        const { votes, onVote } = this.props;

        return (
            <div style={{ margin: '20px 0' }}>
                {Object.entries(votes).map(([emoji, count]) => (
                    <EmojiItem key={emoji} emoji={emoji} count={count} onVote={onVote} />
                ))}
            </div>
        );
    }
}

export default EmojiList;