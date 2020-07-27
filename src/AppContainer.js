import {connect} from "react-redux";
import App from "./App";
import {getTenBooks, toggleIsFetching, zeroingBooksList, zeroingSearchIndex} from "./redux/reducer";

const mapStateToProps = (state) => ({
    books: state.books,
    totalItems: state.totalItems,
    searchIndex: state.searchIndex,
    isFetching: state.isFetching
});

const mapDispatchToProps = (dispatch) => ({
    getBooks: (text, index) => {
        dispatch(getTenBooks(text, index))
    },
    zeroingBooksList: () => {
        dispatch(zeroingBooksList());
    },
    zeroingSearchIndex: () => {
        dispatch(zeroingSearchIndex());
    },
    toggleIsFetching: () => {
        dispatch(toggleIsFetching());
    }
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;