import React from 'react';
import { BookItem } from './bookItem';

export class Books extends React.Component {

    render() {
        return this.props.book.map((book) => {
            return <BookItem book={movie}></BookItem>
        })

    }
}