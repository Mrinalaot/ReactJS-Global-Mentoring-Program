import React from 'react'
import PropTypes from 'prop-types'
import Results from './Results'
import Content from './Content'
import Footer from './Footer'
import MovieDetails from './MovieDetails'
import { useSelector } from 'react-redux'

const MoviePage = ({ movies }) => {
    const selectedMovie = useSelector((state) => state.movies.selectedMovie)
    return (
        <div>
            <MovieDetails movie={selectedMovie} />
            <Results items={movies.length} />
            <Content movies={movies} />
            <Footer />
        </div>
    )
}

MoviePage.propTypes = {
    movies: PropTypes.array,
}

export default MoviePage
