import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/todoSlice';

export default function Todo() {
    // Стан для трьох полів
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        dispatch(addTodo({
            title,
            description,
            dueDate,
        }));

        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Redux"
                    required
                />

                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="React"
                />

                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="New task"
                />

                <button type="submit">Add</button>
            </form>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <b>{todo.title}</b><br />
                        Опис: {todo.description || '-'}<br />
                        Термін: {todo.dueDate || '-'}
                    </li>
                ))}
            </ul>

            <footer>Total number of tasks: {todos.length}</footer>
        </div>
    );
}
