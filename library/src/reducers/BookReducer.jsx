import { combineReducers } from "redux";

const initialState = {
  books: [
    {
      title: "",
      author: "",
      isRead: false,
      id: "",
    },
  ],
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "MARK_AS_READ":
      return state.map((book) =>
        book.id === action.payload ? { ...book, isRead: !book.isRead } : book
      );
    case "FILTER_BOOKS":
      return state.filter((book) => book.id === action.payload);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  booksReducer: BookReducer,
});
