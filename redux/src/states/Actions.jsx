export const addTodo = (text) => {
    return{
        type: 'ADD_TODO',
        payload: {
            id: Math.random(),
            text: text,
            completed: false,
        }
    };
}

export const removeTodo = (id)=>{
    return{
        type: 'REMOVE_TODO',
        payload: id,
    };
}
