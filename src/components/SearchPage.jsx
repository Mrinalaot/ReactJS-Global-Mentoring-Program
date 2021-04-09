import { loadMovies, searchMovieChange } from '../store/actions/ActionCreators'
import { useDispatch, useSelector } from 'react-redux'

import Content from './Content'
import ErrorBoundary from './ErrorBoundary'
import Footer from './Footer'
import Header from './Header'
import React from 'react'
import Results from './Results'
import { useEffect } from 'react'

const SearchPage = ({ match, location }) => {
    const dispatch = useDispatch();
    const phrase = (match && match.params && match.params.query) || '';
    dispatch(searchMovieChange(phrase))

    useEffect(() => {
        dispatch(loadMovies());
    }, [phrase])

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
