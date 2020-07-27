import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';

const InfiniteList = (props) => {

    return (
        <div className="demo-infinite-container">
            <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={props.getBooks}
                hasMore={true}
                useWindow={false}
            >
                {props.children}{/*<List />*/}
            </InfiniteScroll>
        </div>
    );
}

export default InfiniteList;