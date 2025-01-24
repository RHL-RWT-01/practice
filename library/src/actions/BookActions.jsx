export const addBook=() =>{
    return {
        type: "ADD_BOOK",
        payload: {
            title: "",
            author: "",
            id:''
        }
    }
}

export const markAsRead=()=>{
    return {
        type: "MARK_AS_READ",
        payload:''
    }
}

export const filterBooks=()=>{
    return {
        type: "FILTER_BOOKS"
    }
}