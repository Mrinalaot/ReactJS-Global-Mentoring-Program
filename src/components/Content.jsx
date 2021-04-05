import React from 'react'
import PropTypes from 'prop-types'
import MoviesList from './MoviesList'
import ErrorMessage from './ErrorMessage'
import CONSTANTS from '../constants/constants'
import { useSelector } from 'react-redux'

const Content = () => {
    const movies = useSelector((state) => state.movies.data)

    const moviesFound = movies.length > 0
    return (
        <React.Fragment>
            {moviesFound && <MoviesList movies={movies} />}
            {!moviesFound && (
                <ErrorMessage message={CONSTANTS.NO_FILMS_FOUND} />
            )}
        </React.Fragment>
    )
}

export default Content
