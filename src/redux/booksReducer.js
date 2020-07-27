import {getBooks} from "../api/api";
import {ADD_BOOKS, ZEROING_LIST, ZEROING_SEARCH_INDEX} from "./actions";

const initialState = {
    books: [],
    totalItems: 0,
    searchIndex: 0
};

const booksReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_BOOKS:
                return {
                    ...state,
                    books: [...state.books, ...action.books.items],
                    totalItems: action.books.totalItems,
                    searchIndex: state.searchIndex + 10
                };
            case ZEROING_LIST:
                return {
                    ...state,
                    books: [],
                    totalItems: 0
                };
            case ZEROING_SEARCH_INDEX:
                return {
                    ...state,
                    searchIndex: 0
                }
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
});

export const zeroingSearchIndex = () => ({
   type: ZEROING_SEARCH_INDEX
});


export const getTenBooks = (text, index) => {
    return (dispatch) => {
        getBooks(text, index)
            .then(response => dispatch(addBooks(response)));
    };
};

export default booksReducer;