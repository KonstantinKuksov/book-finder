import React from "react";

import styles from './Book.module.css';

const Book = (props) => {

    const bookImage = props.imgUrl
        || 'https://lh3.googleusercontent.com/proxy/1Dwv83pCovRFCdnPkiWhXzggJgJoZ_GRAFev57E6F_lMDH22N85DJ9bEXMz1OFantu5f12enMhZhVqSx37QQCX4Ek1rFi_owt0pPK6gspMx7NrMpHSmGXmMJls53nxuZEOFYalo-8vs'

    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <img src={bookImage} alt="book"/>
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