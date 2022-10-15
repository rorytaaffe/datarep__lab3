import React from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component {

    render() {
        return this.props.movie.map((movie) => {
            return <MovieItem movie={movie}></MovieItem>
        })

    }
}
