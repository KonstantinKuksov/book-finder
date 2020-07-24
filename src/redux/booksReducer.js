import {getBooks} from "../api/api";
import {ADD_BOOKS, ZEROING_LIST} from "./actions";

const initialState = {
    books: [],
    totalItems: 0
};

const booksReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_BOOKS:
                return {
                    ...state,
                    books: [...state.books, ...action.books.items],
                    totalItems: action.books.totalItems
                };
            case ZEROING_LIST:
                return {
                    ...state,
                    books: [],
                    totalItems: 0
                };
            default:
                return state;
        }

}


export const addBooks = (arrBooks) => ({
    type: ADD_BOOKS,
    books: arrBooks
});

export const zeroingBooksList = () => ({
    type: ZEROING_LIST
})


export const getTenBooks = (text) => {
    return (dispatch) => {
        getBooks(text)
            .then(response => dispatch(addBooks(response)));
    };
};

export default booksReducer;