import * as axios from 'axios';

const API_KEY = 'AIzaSyDAZV5wpFAsImyTug9hKqS77HHt3MHRLhQ';

const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/",
    params: {
        'key': API_KEY
    }
});

export const getBooks = (text, startIndex) => {
    return instance.get(`volumes?q=${text}&inauthor:${text}&startIndex=${startIndex}&maxResults=20`)
        .then(data => data.data)
        .catch(error => console.log(error));
};

