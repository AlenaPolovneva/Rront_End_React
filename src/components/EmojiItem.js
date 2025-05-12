import React, { Component } from 'react';

class EmojiItem extends Component {
    handleClick = () => {
        this.props.onVote(this.props.emoji);
    };

    render() {
        const { emoji, count } = this.props;
        return (
            <button onClick={this.handleClick} style={{ fontSize: '2rem', margin: '10px',cursor:'pointer' }}>
                {emoji} ({count})
            </button>
        );
    }
}

export default EmojiItem;