import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import Title from './Title'
import CONSTANTS from '../constants/constants'
import AddMovieButton from './AddMovieButton'
import AddOrEditMovie from './AddOrEditMovie'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
    loadMovies,
    searchMovieChange,
    searchBy as setSearchBy,
} from '../store/actions/ActionCreators'

const Header = () => {
    const searchBy = useSelector((state) => state.search.searchby)
    const mode = useSelector((state) => state.movies.mode)
    const phrase = useSelector((state) => state.search.phrase)

    const dispatch = useDispatch()

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && event.target.value !== '') {
            dispatch(loadMovies())
        }
    }

    const titleClass = classNames('lighten-1 btn buttons', {
        red: searchBy === 'title',
        grey: searchBy === 'genres',
    })

    const genreClass = classNames('lighten-1 btn buttons', {
        red: searchBy === 'genres',
        grey: searchBy === 'title',
    })

    return (
        <header className="header">
            <div className="title-container">
                <Title />
                <AddMovieButton />
                {['add', 'edit'].includes(mode) ? (
                    <AddOrEditMovie show={['add', 'edit'].includes(mode)} />
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
                    onChange={(event) =>
                        dispatch(searchMovieChange(event.target.value))
                    }
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="red lighten-1 btn right"
                    onClick={() => dispatch(loadMovies())}
                >
                    {CONSTANTS.SEARCH}
                </button>
            </div>
            <div className="search-phrase-section">
                <div className="search-by-section">
                    <h6 className="white-text text-darken-2 left">
                        {CONSTANTS.SEARCH_BY}
                    </h6>
                    <button
                        id="title"
                        className={titleClass}
                        onClick={() => dispatch(setSearchBy('title'))}
                    >
                        {CONSTANTS.TITLE}
                    </button>
                    <button
                        id="genre"
                        className={genreClass}
                        onClick={() => dispatch(setSearchBy('genres'))}
                    >
                        {CONSTANTS.GENRE}
                    </button>
                </div>
                <div className="results-for-section">
                    <h6 className="white-text text-darken-2">
                        {CONSTANTS.RESULTS_FOR}
                    </h6>
                    <h6 className="red-text text-darken-2 search-phrase">
                        {phrase}
                    </h6>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    refreshResults: PropTypes.func,
}

export default Header
