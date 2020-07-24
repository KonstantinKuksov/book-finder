import React from "react";

import styles from './Book.module.css';

const Book = (props) => {

    const {title, author, year, link, img} = props.book;

    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <img src={img} alt="book"/>
            </div>
            <div className={styles.description}>
                <p>{`Title: ${title}`}</p>
                <p>{`Author(s): ${author}`}</p>
                <p>{`Publication date: ${year}`}</p>
                <p><a href={link}>more details</a></p>
            </div>
        </div>
    )
}

export default Book;