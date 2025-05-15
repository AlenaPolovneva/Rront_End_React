import {useState, useEffect} from "react";
import EmojiList from "./components/EmojiList";
import Result from "./components/Result";
import { loadVotes, saveVotes, clearVotes } from './LocalStorage';

const defaultItems = [
    { id: 1, text: "let the smile", completed: false, smile: '😊', votes: 0 },
    { id: 2, text: "life is fun", completed: false, smile: '😂', votes: 0 },
    { id: 3, text: "love everywhere", completed: false, smile: '😍', votes: 0 },
    { id: 4, text: "sometimes sad", completed: false, smile: '😢', votes: 0 },
    { id: 5, text: "angry moments", completed: false, smile: '😡', votes: 0 }
];

const emojis = defaultItems.map(item => item.smile);

export default function App() {
    const [votes, setVotes] = useState(() => {
        return loadVotes() || emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {});
    });

    const [showResult, setShowResult] = useState(false);
    useEffect(() => {
        saveVotes(votes);
    }, [votes]);

    const handleVote = (emoji) => {
        setVotes(prev => ({
            ...prev,
            [emoji]: prev[emoji] + 1
        }));
    };

    const handleShowResult = () => {
        setShowResult(true);
    };

    const handleClear = () => {
        clearVotes();
        setVotes(emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {}));
        setShowResult(false);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Голосування за смайлик</h1>
            <EmojiList items={defaultItems} votes={votes} onVote={handleVote} />
            <button onClick={handleShowResult} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                Вивести результати
            </button>
            <button onClick={handleClear} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                Очистити результати
            </button>
            {showResult && <Result votes={votes} />}
        </div>
    );
}