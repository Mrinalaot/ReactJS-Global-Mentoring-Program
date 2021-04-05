import React from 'react'
import classNames from 'classnames'
import './style.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchPage from './components/SearchPage'
import MoviePage from './components/MoviePage'
import { useDocumentTitle } from './components/CustomHooks'
import CONSTANTS from './constants/constants'
import { useSelector } from 'react-redux'

const App = () => {
    const isLoading = useSelector((state) => state.movies.isLoading)
    const selectedMovie = useSelector((state) => state.movies.selectedMovie)
    const data = useSelector((state) => state.movies.data)

    useDocumentTitle(CONSTANTS.NETFLIX)

    const loading = classNames({
        loading: isLoading,
        none: !isLoading,
    })

    return (
        <React.Fragment>
            <div className={loading}>Loading&#8230;</div>
            {!selectedMovie ? (
                <SearchPage movies={data} />
            ) : (
                <MoviePage movies={data} />
            )}
        </React.Fragment>
    )
}

export default App
