import {connect} from "react-redux";
import App from "./App";
import {getTenBooks, zeroingBooksList} from "./redux/booksReducer";
import {updateInput} from "./redux/inputReducer";

const mapStateToProps = (state) => ({
    newText: state.inputReducer.inputText,
    books: state.booksReducer.books,
    totalItems: state.booksReducer.totalItems
});

const mapDispatchToProps = (dispatch) => ({
    updateInputText: (text) => {
        dispatch(updateInput(text));
    },
    getBooks: (text) => {
        dispatch(getTenBooks(text))
    },
    zeroingBooksList: () => {
        dispatch(zeroingBooksList());
    }
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;