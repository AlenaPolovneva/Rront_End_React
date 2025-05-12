import React, { Component } from 'react';
import EmojiList from './components/EmojiList';
import Result from './components/Result';
import { loadVotes, saveVotes, clearVotes } from './LocalStorage';

const emojis = ['😊', '😂', '😍', '😢', '😡'];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: loadVotes() || emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {}),
            showResult: false
        };
    }

    handleVote = (emoji) => {
        this.setState(
            prevState => {
                const updatedVotes = {
                    ...prevState.votes,
                    [emoji]: prevState.votes[emoji] + 1
                };
                saveVotes(updatedVotes);
                return { votes: updatedVotes };
            }
        );
    };

    handleShowResult = () => {
        this.setState({ showResult: true });
    };

    handleClear = () => {
        clearVotes();
        this.setState({
            votes: emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {}),
            showResult: false
        });
    };

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Голосування за смайлик</h1>
                <EmojiList votes={this.state.votes} onVote={this.handleVote} />
                <button onClick={this.handleShowResult} style={{ marginLeft: '10px',cursor: 'pointer' }}>Вивести результати</button>
                <button onClick={this.handleClear} style={{ marginLeft: '10px', cursor: 'pointer' }}>Очистити результати</button>
                {this.state.showResult && <Result votes={this.state.votes} />}
            </div>
        );
    }
}

export default App;