import React, {useEffect} from 'react';

import {Input} from 'antd';
import Book from "./components/Book/Book";

import 'antd/dist/antd.css';
import './app.css';
import formatResponse from "./helpers/formatResponce";

const {Search} = Input;

const App = (props) => {

    const {books, newText, getBooks, updateInputText, zeroingBooksList} = props;

    const booksList = formatResponse(books);

    const onInputChange = (event) => {
        const text = event.target.value;
        updateInputText(text);
    };

    const onSearch = () => {
        zeroingBooksList();
        getBooks(newText);
    };

    const booksListRender = booksList.map((book) => {
        return (
            <Book book={{...book}}
                  key={book.id}/>
        )
    });

    const inputRef = React.createRef();

    useEffect(() => {
        inputRef.current.focus();
    });

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

        </>
    );
};

export default App;