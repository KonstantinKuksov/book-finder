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
            img: 'https://lh3.googleusercontent.com/proxy/1Dwv83pCovRFCdnPkiWhXzggJgJoZ_GRAFev57E6F_lMDH22N85DJ9bEXMz1OFantu5f12enMhZhVqSx37QQCX4Ek1rFi_owt0pPK6gspMx7NrMpHSmGXmMJls53nxuZEOFYalo-8vs',
            link: '/'
        },
        {
            id: '101',
            title: 'Second title',
            author: 'Second Author',
            year: '2010',
            img: 'https://lh3.googleusercontent.com/proxy/1Dwv83pCovRFCdnPkiWhXzggJgJoZ_GRAFev57E6F_lMDH22N85DJ9bEXMz1OFantu5f12enMhZhVqSx37QQCX4Ek1rFi_owt0pPK6gspMx7NrMpHSmGXmMJls53nxuZEOFYalo-8vs',
            link: '/'
        },
        {
            id: '102',
            title: 'Third title',
            author: 'Third Author',
            year: '2015',
            img: 'https://lh3.googleusercontent.com/proxy/1Dwv83pCovRFCdnPkiWhXzggJgJoZ_GRAFev57E6F_lMDH22N85DJ9bEXMz1OFantu5f12enMhZhVqSx37QQCX4Ek1rFi_owt0pPK6gspMx7NrMpHSmGXmMJls53nxuZEOFYalo-8vs',
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

export const getTenBooks = (text) => {
    return (dispatch) => {
        getBooks(text)
            .then(response => dispatch(addBooks(formatResponse(response))));
    };
};

export default booksReducer;