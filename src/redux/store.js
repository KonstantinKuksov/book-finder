import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import inputReducer from "./inputReducer";
import booksReducer from "./booksReducer";

const reducers = combineReducers({
    inputReducer,
    booksReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;