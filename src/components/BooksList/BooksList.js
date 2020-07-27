import {Avatar, List, Spin} from "antd";
import React from "react";

import './books-list.css';

const BooksList = (props) => {

    const {booksList, isFetching} = props;

    return (
        <List
            dataSource={booksList}
            grid={{column: 2}}
            bordered={true}
            renderItem={item => (
                <List.Item key={item.id} className="list-item-styles">
                    <List.Item.Meta
                        avatar={
                            <Avatar className="avatar-big" src={item.img}/>
                        }
                        title={item.title}
                        description={item.author}
                    />
                    <div className="content-container">
                        <p>{`Publication date: ${item.year}`}</p>
                        <p><a href={item.link}>more details</a></p>
                    </div>
                </List.Item>
            )}
        >
            { isFetching && <div className="demo-loading-container">
                <Spin/>
            </div>}
        </List>
    );

}

export default BooksList;