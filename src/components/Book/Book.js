import React from "react";

import styles from './Book.module.css';

const Book = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <img src={props.imgUrl} alt="book picture"/>
            </div>
            <div className={styles.description}>
                <p>{`Title: ${props.title}`}</p>
                <p>{`Author(s): ${props.author}`}</p>
                <p>{`Year: ${props.year}`}</p>
                <p>{`Publisher: ${props.publisher}`}</p>
                <p>{`More info: ${props.info}`}</p>
            </div>
        </div>
    )
}

export default Book;