const ADD_TODO = 'todos/addTodo';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
});

const initialState = [];

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { id: Date.now(), text: action.payload }];
        default:
            return state;
    }
}