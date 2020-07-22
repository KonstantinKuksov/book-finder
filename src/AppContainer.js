import {connect} from "react-redux";
import App from "./App";
import {getTenBooks} from "./redux/booksReducer";
import {updateInput} from "./redux/inputReducer";

const mapStateToProps = (state) => ({
    newText: state.inputReducer.inputText,
    books: state.booksReducer.books
});

const mapDispatchToProps = (dispatch) => ({
    updateInputText: (text) => {
        dispatch(updateInput(text));
    },
    getBooks: (text) => {
        dispatch(getTenBooks(text))
    }
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;