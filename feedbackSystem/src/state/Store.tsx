import { legacy_createStore } from "redux";
import { feedbackReducer } from "./Reducers";

export const store = legacy_createStore(feedbackReducer);