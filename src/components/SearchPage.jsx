import React from 'react'
import Header from './Header'
import Results from './Results'
import Content from './Content'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadMovies, searchMovieChange } from '../store/actions/ActionCreators'

const SearchPage = ({ match, location }) => {
    const dispatch = useDispatch();
    const phrase = match && match.params && match.params.query;
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
