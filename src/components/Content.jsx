import React from 'react'
import MoviesList from './MoviesList'
import ErrorMessage from './ErrorMessage'
import CONSTANTS from '../constants/constants'
import { useSelector } from 'react-redux'

import DeleteMovie from './DeleteMovie'

const Content = () => {
    const movies = useSelector((state) => state.movies.data)
    const mode = useSelector((state) => state.movies.mode)

    const moviesFound = movies.length > 0
    return (
        <React.Fragment>
            <DeleteMovie show={['delete'].includes(mode)} />
            {moviesFound && <MoviesList movies={movies} />}
            {!moviesFound && (
                <ErrorMessage message={CONSTANTS.NO_FILMS_FOUND} />
            )}
        </React.Fragment>
    )
}

export default Content
