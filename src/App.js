import React, {useEffect, useState} from 'react';

import {Input, Button} from 'antd';

import 'antd/dist/antd.css';
import './app.css';
import BooksList from "./components/BooksList/BooksList";
import formatResponse from "./helpers/formatResponce";

const {Search} = Input;

const App = (props) => {

    const {
        books, getBooks, zeroingBooksList,
        zeroingSearchIndex, searchIndex,
        isFetching, toggleIsFetching
    } = props;

    const [inputText, updateInputText] = useState("");

    const [moreButton, toggleMoreButton] = useState(false);

    const booksList = formatResponse(books);

    const onInputChange = (event) => {
        zeroingSearchIndex();
        const text = event.target.value;
        updateInputText(text);
        inputRef.current.focus();
    };

    const onSearch = () => {
        toggleIsFetching();
        zeroingBooksList();
        zeroingSearchIndex();
        inputText ? getBooks(inputText, 0) : getBooks("empty", 0);
        toggleMoreButton(true);
    };

    const inputRef = React.createRef();
    const moreButtonRef = React.createRef();

    useEffect(() => {
        searchIndex ? moreButtonRef.current.focus() : inputRef.current.focus();
    });

    const getMoreResults = () => {
        toggleIsFetching();
        getBooks(inputText, searchIndex);
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
                    ref={inputRef}
                />
            </div>

            <BooksList booksList={booksList}
                       isFetching={isFetching}/>

            <div className="more-results-container">
                {moreButton && (
                    <Button type="primary"
                            className="more-results"
                            onClick={getMoreResults}
                            ref={moreButtonRef}>
                        More results
                    </Button>)}
            </div>

        </>
    );
};

export default App;