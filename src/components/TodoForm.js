import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../store/thunks/TodoThunks";

function TodoForm() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = title.trim();
        if (!trimmed) return;

        dispatch(addTodo ({
            id: Date.now(),
            title: trimmed,
            completed: false,}));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20}}>
            <input
                type="text"
                value={title}
                placeholder="New task"
                onChange={(e) => setTitle(e.target.value)}
                style={{ padding: 8, width: '70%', marginRight: 8 }}
            />
            <button type="submit" style={{ padding: '8px 8px', cursor:"pointer"}}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;