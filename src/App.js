import React from 'react';

import {Input} from 'antd';
import {getBooks} from "./api/api";
import Book from "./components/Book/Book";

import 'antd/dist/antd.css';
import './App.css';


function App() {

    const {Search} = Input;

    const getAllBooks = async () => {
        let arr;
        await getBooks()
                .then( response => {
                    arr = response
                });
        console.log(arr);
        return arr;
    }

    return (
        <>
            <h1 className="title" onClick={getAllBooks}>Book Finder</h1>
            <div className="inputWrapper">
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    className="search"
                />
            </div>
            <div className="booksWrapper">
                <Book title={"First title"}
                      author={"First Author"}
                      year={"2005"}
                      imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcfp7UgN0jFkbIzIa9bOUHumNoIMvLSmo_Sg&usqp=CAU"}/>
                <Book title={"Second title"}
                      author={"Second Author"}
                      year={"2012"}
                      imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcfp7UgN0jFkbIzIa9bOUHumNoIMvLSmo_Sg&usqp=CAU"}/>
                <Book title={"Third title"}
                      author={"Third Author"}
                      year={"2018"}
                      imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcfp7UgN0jFkbIzIa9bOUHumNoIMvLSmo_Sg&usqp=CAU"}/>
            </div>
        </>
    );
}

export default App;