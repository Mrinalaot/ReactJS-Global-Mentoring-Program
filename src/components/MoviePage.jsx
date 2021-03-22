import React from 'react';
import PropTypes from 'prop-types';
import Results from './Results';
import Content from './Content';
import Footer from './Footer';
import MovieDetails from './MovieDetails';

const MoviePage = ({ movies, setSelectedMovie, selectedMovie }) => {
    return (
        <div>
            <MovieDetails movie={selectedMovie} />
            <Results items={movies.length} />
            <Content movies={movies} setSelectedMovie={setSelectedMovie} />
            <Footer />
        </div>
    )
}

MoviePage.propTypes = {
    movies: PropTypes.array,
    setSelectedMovie: PropTypes.func,
    selectedMovie: PropTypes.object,
}

export default MoviePage