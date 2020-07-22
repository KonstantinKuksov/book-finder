import * as axios from 'axios';

const API_KEY = 'AIzaSyDAZV5wpFAsImyTug9hKqS77HHt3MHRLhQ';

export const getBooks = ( text = " " ) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&inauthor:${text}&key=${API_KEY}`)
             .then( data =>  data.data.items );
};

