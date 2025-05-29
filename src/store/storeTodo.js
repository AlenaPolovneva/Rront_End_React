import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const storeTodo = configureStore({
    reducer: {
        todos: todosReducer,
    },
});