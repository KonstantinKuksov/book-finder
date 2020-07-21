import * as axios from 'axios';

const API_KEY = 'AIzaSyDAZV5wpFAsImyTug9hKqS77HHt3MHRLhQ';

export const getBooks = () => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${API_KEY}`)
             .then( data =>  data.data.items );
};