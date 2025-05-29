import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './store/thunks/TodoThunks';
import TodoForm from './components/TodoForm';

function TodosPage() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.todos);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTodos());
        }
    }, [dispatch, status]);

    return (
        <div style={{ maxWidth: 500, margin: 'auto', padding: 20, backgroundColor:"lightblue"}}>
            <h1>List of tasks</h1>
            <TodoForm />
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p style={{color: 'red'}}>Error: {error}</p>}
            <ul>
                {items.map((todo) => (
                    <li key={todo.id} style={{marginBottom: 8}}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodosPage;
