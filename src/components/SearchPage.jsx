import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Results from './Results'
import Content from './Content'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import { useSelector } from 'react-redux'

const SearchPage = () => {
    const movies = useSelector((state) => state.movies.data)
    return (
        <div>
            <Header />
            <Results items={movies.length} />
            <ErrorBoundary>
                <Content movies={movies} />
            </ErrorBoundary>
            <Footer />
        </div>
    )
}

export default SearchPage
