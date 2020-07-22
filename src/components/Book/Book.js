import React from "react";

import styles from './Book.module.css';

const Book = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <img src={props.imgUrl} alt="book"/>
            </div>
            <div className={styles.description}>
                <p>{`Title: ${props.title}`}</p>
                <p>{`Author(s): ${props.author}`}</p>
                <p>{`Publication date: ${props.year}`}</p>
                <p><a href={props.link}>more details</a></p>
            </div>
        </div>
    )
}

export default Book;