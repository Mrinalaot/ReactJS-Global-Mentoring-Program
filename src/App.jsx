import React, { useState } from 'react'
import classNames from 'classnames'
import './style.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchPage from './components/SearchPage'
import axios from 'axios'
import MoviePage from './components/MoviePage'
import { useDocumentTitle } from './components/CustomHooks'
import CONSTANTS from './constants/constants'

const App = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    useDocumentTitle(CONSTANTS.NETFLIX)

    const selectMovie = (movie) => {
        window.scrollTo(0, 0)
        setSelectedMovie(movie)
    }

    const refreshResults = async (url) => {
        try {
            setIsLoading(true)
            const response = await axios.get(url)
            setData(response.data.data)
            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
        }
    }

    const loading = classNames({
        loading: isLoading,
        none: !isLoading,
    })

    return (
        <React.Fragment>
            <div className={loading}>Loading&#8230;</div>
            {!selectedMovie ? (
                <SearchPage
                    movies={data}
                    refreshResults={refreshResults}
                    setSelectedMovie={selectMovie}
                />
            ) : (
                <MoviePage
                    movies={data}
                    selectedMovie={selectedMovie}
                    setSelectedMovie={selectMovie}
                />
            )}
        </React.Fragment>
    )
}

export default App
