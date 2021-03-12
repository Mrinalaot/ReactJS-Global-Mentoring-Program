import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const MoviesList = ({ movies, setSelectedMovie }) => (
    <div className="movies-list">
        {movies.map((movie) => (
            <Item
                movie={movie}
                key={movie.id}
                setSelectedMovie={setSelectedMovie}
            />
        ))}
    </div>
)

MoviesList.propTypes = {
    movies: PropTypes.array,
    setSelectedMovie: PropTypes.func,
}

export default MoviesList
