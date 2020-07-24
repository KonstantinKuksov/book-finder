import bookImage from './../img/book.png';

const formatResponse = (arr) => {
        return arr.map((item) => {
            if (!item.volumeInfo.authors) {
                item.volumeInfo.authors = ["unknown author"];
            }
            return ({
                id: item.id,
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors.join(', '),
                year: item.volumeInfo.publishedDate,
                img: item.volumeInfo.imageLinks.smallThumbnail || bookImage,
                link: item.volumeInfo.infoLink
            })
        });
};

export default formatResponse;