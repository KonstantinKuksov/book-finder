import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import {Input} from 'antd';
import BooksList from "./components/BooksList/BooksList";
import InfiniteList from "./components/InfiniteList/InfiniteList";
import formatResponse from "./helpers/formatResponce";

import 'antd/dist/antd.css';
import './app.css';

const {Search} = Input;

const App = (props) => {

    const {
        books, getBooks, zeroingBooksList,
        zeroingSearchIndex, searchIndex,
        isFetching, toggleIsFetching
    } = props;

    const [inputText, updateInputText] = useState("");

    const booksList = formatResponse(books);

    const history = useHistory();

    const onInputChange = (event) => {
        zeroingSearchIndex();
        updateInputText(event.target.value);
    };

    const onSearch = () => {
        toggleIsFetching();
        zeroingBooksList();
        zeroingSearchIndex();
        inputText ? getBooks(inputText, 0) : getBooks("empty", 0);
    };

    const getMoreResults = () => {
        if (searchIndex && !isFetching) {
            toggleIsFetching();
            getBooks(inputText, searchIndex);
        }
    }

    return (
        <>
            <h1 className="title">Book Finder</h1>
            <div className="inputWrapper">
                <Search
                    placeholder="input search book"
                    onSearch={onSearch}
                    className="search"
                    value={inputText}
                    onChange={onInputChange}
                />
            </div>

            <InfiniteList loadMore={getMoreResults}>
                <BooksList booksList={booksList}
                           isFetching={isFetching}/>
            </InfiniteList>

        </>
    );
};

export default App;