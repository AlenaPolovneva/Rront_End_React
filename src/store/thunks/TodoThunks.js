import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}?_limit=5`);
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }
            return await response.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (newTodo, { rejectWithValue }) => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTodo),
            });
            if (!response.ok) {
                throw new Error('Failed to add todo');
            }
            return await response.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async (updatedTodo, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/${updatedTodo.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTodo),
            });
            if (!response.ok) {
                throw new Error('Failed to update todo');
            }
            return await response.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete todo');
            }
            return id;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);