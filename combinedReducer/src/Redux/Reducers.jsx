import { combineReducers } from "redux";

const initailState = {
  count: 0,
  person: {
    name: "Rajkumar",
    age: "25",
  },
};

const countReducer = (state = initailState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const userReducer = (state = initailState, action) => {
  switch (action.type) {
    case "UPDATEUSER":
      return { ...state, person: { ...state.person, name: action.payload } };
    case "UPDATEAGE":
      return { ...state, person: { ...state.person, age: action.payload } };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: countReducer,
  user: userReducer,
});
