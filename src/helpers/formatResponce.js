const formatResponse = (arr) => {
    return arr.map( (item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors.join(', '),
            year: item.volumeInfo.publishedDate,
            img: item.volumeInfo.imageLinks.smallThumbnail,
            link: item.volumeInfo.infoLink
    }) );
};

export default formatResponse;