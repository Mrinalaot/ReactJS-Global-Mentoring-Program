import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from './MoviesList';
import ErrorMessage from './ErrorMessage';
import CONSTANTS from '../constants/constants';

const Content = ({ movies, setSelectedMovie }) => {
    const moviesFound = movies.length > 0
    return (
        <React.Fragment>
            {moviesFound && (
                <MoviesList
                    movies={movies}
                    setSelectedMovie={setSelectedMovie}
                />
            )}
            {!moviesFound && (
                <ErrorMessage message={CONSTANTS.NO_FILMS_FOUND} />
            )}
        </React.Fragment>
    )
}

Content.propTypes = {
    movies: PropTypes.array,
    setSelectedMovie: PropTypes.func,
}

export default Content;