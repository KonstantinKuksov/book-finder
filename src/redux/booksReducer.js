import {getBooks} from "../api/api";
import formatResponse from "../helpers/formatResponce";
import {ADD_BOOKS} from "./actions";

const initialState = {
    books: [
        {
            id: '100',
            title: 'First title',
            author: 'First Author',
            year: '2005',
            img: 'https://lh3.googleusercontent.com/proxy/QD9xeTeuuIOeRmf_8OougRb75px2ZVyMRYbt5O20P4awi0Fsp88PIq1fRuYaU9DdSHBNa8DIm3_AiXDB1yfH8kMKBz33dpH3NwHJ76O8ykNmqmun2g',
            link: '/'
        },
        {
            id: '101',
            title: 'Second title',
            author: 'Second Author',
            year: '2010',
            img: 'https://lh3.googleusercontent.com/proxy/QD9xeTeuuIOeRmf_8OougRb75px2ZVyMRYbt5O20P4awi0Fsp88PIq1fRuYaU9DdSHBNa8DIm3_AiXDB1yfH8kMKBz33dpH3NwHJ76O8ykNmqmun2g',
            link: '/'
        },
        {
            id: '102',
            title: 'Third title',
            author: 'Third Author',
            year: '2015',
            img: 'https://lh3.googleusercontent.com/proxy/QD9xeTeuuIOeRmf_8OougRb75px2ZVyMRYbt5O20P4awi0Fsp88PIq1fRuYaU9DdSHBNa8DIm3_AiXDB1yfH8kMKBz33dpH3NwHJ76O8ykNmqmun2g',
            link: '/'
        }
    ]
};

const booksReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_BOOKS:
            return {
                ...state,
                books: [...state.books, ...action.books]
            };
        default:
            return state;
    }

};

export const addBooks = (arrBooks) => ({
    type: ADD_BOOKS,
    books: arrBooks
});

export const getTenBooks = () => {
    return (dispatch) => {
        getBooks()
            .then(response => dispatch(addBooks(formatResponse(response))));
    };
};

export default booksReducer;