import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './thunks/TodoThunks';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        fetchStatus: 'idle',
        addStatus: 'idle',
        updateStatus: 'idle',
        deleteStatus: 'idle',
        fetchError: null,
        addError: null,
        updateError: null,
        deleteError: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.fetchStatus = 'loading';
                state.fetchError = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.fetchStatus = 'failed';
                state.fetchError = action.payload || action.error.message;
            });

        builder
            .addCase(addTodo.pending, (state) => {
                state.addStatus = 'loading';
                state.addError = null;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.addStatus = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.addStatus = 'failed';
                state.addError = action.payload || action.error.message;
            });

        builder
            .addCase(updateTodo.pending, (state) => {
                state.updateStatus = 'loading';
                state.updateError = null;
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.updateStatus = 'succeeded';
                const index = state.items.findIndex(todo => todo.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.updateStatus = 'failed';
                state.updateError = action.payload || action.error.message;
            });

        builder
            .addCase(deleteTodo.pending, (state) => {
                state.deleteStatus = 'loading';
                state.deleteError = null;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.deleteStatus = 'succeeded';
                state.items = state.items.filter(todo => todo.id !== action.payload);
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.deleteStatus = 'failed';
                state.deleteError = action.payload || action.error.message;
            });
    },
});

export default todosSlice.reducer;