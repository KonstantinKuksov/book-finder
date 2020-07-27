import {connect} from "react-redux";
import App from "./App";
import {getTenBooks, zeroingBooksList, zeroingSearchIndex} from "./redux/booksReducer";
import {updateInput} from "./redux/inputReducer";

const mapStateToProps = (state) => ({
    newText: state.inputReducer.inputText,
    books: state.booksReducer.books,
    totalItems: state.booksReducer.totalItems,
    searchIndex: state.booksReducer.searchIndex
});

const mapDispatchToProps = (dispatch) => ({
    updateInputText: (text) => {
        dispatch(updateInput(text));
    },
    getBooks: (text, index) => {
        dispatch(getTenBooks(text, index))
    },
    zeroingBooksList: () => {
        dispatch(zeroingBooksList());
    },
    zeroingSearchIndex: () => {
        dispatch(zeroingSearchIndex());
    }
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;