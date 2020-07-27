import React, {useEffect} from 'react';

import {Input, Button} from 'antd';
import Book from "./components/Book/Book";

import 'antd/dist/antd.css';
import './app.css';
import formatResponse from "./helpers/formatResponce";

const {Search} = Input;

const App = (props) => {

    const {
        books, newText, getBooks, updateInputText, zeroingBooksList,
        zeroingSearchIndex, searchIndex
    } = props;

    const booksList = formatResponse(books);

    const onInputChange = (event) => {
        zeroingSearchIndex();
        const text = event.target.value;
        updateInputText(text);
        inputRef.current.focus();
    };

    const onSearch = () => {
        zeroingBooksList();
        zeroingSearchIndex();
        newText ? getBooks(newText, 0) : getBooks("empty", 0);
    };

    const booksListRender = booksList.map((book) => {
        return (
            <Book book={{...book}}
                  key={book.id}/>
        )
    });

    const inputRef = React.createRef();
    const moreButtonRef = React.createRef();

    useEffect(() => {
        searchIndex ? moreButtonRef.current.focus() : inputRef.current.focus();
    });

    const getMoreResults = () => {
        getBooks(newText, searchIndex);
    }

    return (
        <>
            <h1 className="title">Book Finder</h1>
            <div className="inputWrapper">
                <Search
                    placeholder="input search book"
                    onSearch={onSearch}
                    className="search"
                    value={newText}
                    onChange={onInputChange}
                    ref={inputRef}
                />
            </div>

            <div className="booksWrapper">
                {booksListRender}
            </div>
            <div className="more-results-container">
                <Button type="primary"
                        className="more-results"
                        onClick={getMoreResults}
                        ref={moreButtonRef}>
                    More results
                </Button>
            </div>
        </>
    );
};

export default App;