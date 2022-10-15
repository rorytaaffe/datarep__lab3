import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        books: [
            {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
                "authors": ["Rick Umali"],
                "categories": []
            },
            {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status": "MEAP",
                "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                ],
                "categories": []
            },
            {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
            }
        ]


    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
            .then(
                (response) => {
                    this.setState({ movies: response.data.movies })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            );
    }

    render() {
        return (
            <div>
                <h1>This is the Read Component.</h1>
                <Movies movie={this.state.movies}></Movies>
            </div>
        );
    }
}