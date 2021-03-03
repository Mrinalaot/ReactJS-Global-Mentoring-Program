import React from 'react';
import PropTypes from 'prop-types';
import Results from './Results';
import Content from './Content';
import Footer from './Footer';
import MovieDetails from './MovieDetails';

const SearchPage = ({ movies }) => {
  return (
    <div>
        <MovieDetails movie={movies[0]} />
        <Results items={movies.length} />
        <Content movies={movies} />
        <Footer />
    </div>
  )
}

SearchPage.propTypes = {
  movies: PropTypes.object
};

export default SearchPage;