import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Results from './Results'
import Content from './Content'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'

const SearchPage = ({ movies, refreshResults }) => {
    return (
        <div>
            <Header refreshResults={refreshResults} />
            <Results items={movies.length} />
            <ErrorBoundary>
                <Content movies={movies} />
            </ErrorBoundary>
            <Footer />
        </div>
    )
}

Content.propTypes = {
    movies: PropTypes.array,
    refreshResults: PropTypes.func,
}

export default SearchPage