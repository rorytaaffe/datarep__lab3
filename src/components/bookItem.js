import React from 'react';
import Card from 'react-bootstrap/Card'; // importing the card style

export class BookItem extends React.Component {

    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.book.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.book.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
