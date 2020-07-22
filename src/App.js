import React, {useEffect} from 'react';

import {Input} from 'antd';
import Book from "./components/Book/Book";

import 'antd/dist/antd.css';
import './App.css';

const App = (props) => {

    //debugger;

    const onInputChange = (event) => {
        const text = event.target.value;
        props.updateInputText(text);
    }

    const {Search} = Input;

    const booksListRender = props.books.map((book) => {
        return (
            <Book title={book.title}
                  author={book.author}
                  year={book.year}
                  imgUrl={book.img}
                  key={book.id}
                  link={book.link}
            />
        )
    });

    const inputRef = React.createRef();

    useEffect( () => {
        inputRef.current.focus();
    });

    return (
        <>
            <h1 className="title">Book Finder</h1>
            <div className="inputWrapper">
                <Search
                    placeholder="input search text"
                    onSearch={ () => props.getBooks(props.newText) }
                    className="search"
                    value={props.newText}
                    onChange={onInputChange}
                    ref={inputRef}
                />
            </div>
            <div className="booksWrapper">
                {booksListRender}
            </div>
        </>
    );
}

export default App;