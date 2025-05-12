import React, { Component } from 'react';

class Result extends Component {
    getWinner = () => {
        const { votes } = this.props;
        const maxVotes = Math.max(...Object.values(votes));
        const winners = Object.entries(votes).filter(([_, v]) => v === maxVotes);
        return winners.length === 1 ? winners[0][0] : 'Нічия';
    };

    render() {
        const winner = this.getWinner();
        return (
            <div style={{ marginTop: '20px', fontSize: '1.5rem' }}>
                Переможець: {winner}
            </div>
        );
    }
}

export default Result;