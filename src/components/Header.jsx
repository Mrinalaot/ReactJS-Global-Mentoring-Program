import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import Title from './Title'
import CONSTANTS from '../constants/constants'
import AddMovieButton from './AddMovieButton'
import AddOrEditMovie from './AddOrEditMovie'
import PropTypes from 'prop-types'

const Header = ({ refreshResults }) => {
    const [searchBy, setSearchBy] = useState('title')
    const [searchStr, setSearchStr] = useState('')
    const [showAddMovie, setShowAddMovie] = useState(false)

    const base = CONSTANTS.MOVIE_API_BASE_URL;
    const url = `${base}?search=${searchStr}&searchBy=${searchBy}`

    useEffect(() => {
        refreshResultsWithSearch()
    }, [])

    const refreshResultsWithSearch = useCallback(() => {
        refreshResults(url)
    }, [searchBy, searchStr])

    const handleSearchByClick = (event) => {
        setSearchBy(event.target.id)
    }

    const handleSearch = () => {
        refreshResultsWithSearch()
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && event.target.value !== '') {
            handleSearch()
        }
    }

    const onAddMovieSubmit = () => {
        alert('Submitted')
        setShowAddMovie(false)
    }

    const titleClass = classNames('lighten-1 btn buttons', {
        red: searchBy === 'title',
        grey: searchBy === 'genre',
    })

    const genreClass = classNames('lighten-1 btn buttons', {
        red: searchBy === 'genre',
        grey: searchBy === 'title',
    })
    return (
        <header className="header">
            <div className="title-container">
                <Title />
                <AddMovieButton add={() => setShowAddMovie(true)} />
                {showAddMovie ? (
                    <AddOrEditMovie
                        show={showAddMovie}
                        onClose={() => setShowAddMovie(false)}
                        onSubmit={onAddMovieSubmit}
                    />
                ) : (
                    ''
                )}
            </div>
            <div>
                <h4 className="white-text text-darken-2">{CONSTANTS.FIND}</h4>
                <input
                    type="text"
                    placeholder="Enter the title"
                    className="input-field white-text"
                    onChange={(event) => setSearchStr(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div>
                <h6 className="white-text text-darken-2 left">
                    {CONSTANTS.SEARCH_BY}
                </h6>
                <button
                    id="title"
                    className={titleClass}
                    onClick={handleSearchByClick}
                >
                    {CONSTANTS.TITLE}
                </button>
                <button
                    id="genre"
                    className={genreClass}
                    onClick={handleSearchByClick}
                >
                    {CONSTANTS.GENRE}
                </button>
                <button
                    className="red lighten-1 btn right"
                    onClick={handleSearch}
                >
                    {CONSTANTS.SEARCH}
                </button>
            </div>
        </header>
    )
}

Header.propTypes = {
    refreshResults: PropTypes.func,
}

export default Header