const initialState = {
    todos: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: action.payload.id, text: action.payload.text, completed: false }];
        // case 'TOGGLE_TODO':
        //     return state.map(todo =>
        //         todo.id === action.id? {...todo, completed:!todo.completed } : todo
        //     );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id!== action.id);
        default:
            return state;
    }
}

