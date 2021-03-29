import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import AddOrEditMovie from './AddOrEditMovie'
import DeleteMovie from './DeleteMovie'
import { selectMovie } from '../store/actions/ActionCreators'
import { connect, useDispatch, useSelector } from 'react-redux'

const Item = ({ movie }) => {
    const dispatch = useDispatch()

    const mode = useSelector((state) => state.movies.mode)

    const genres = movie.genres.join(' & ')

    return (
        <div className="card-panel hoverable movie-card">
            <Menu />
            <AddOrEditMovie show={['add', 'edit'].includes(mode)} />
            <DeleteMovie show={['delete'].includes(mode)} />
            <div>
                <img
                    src={movie.poster_path}
                    className="thumbnails"
                    alt={movie.overview}
                    onClick={() => dispatch(selectMovie(movie))}
                />
            </div>
            <div className="details">
                <span className="movie-title">{movie.title.toUpperCase()}</span>
                <span className="release-date">{movie.release_date}</span>
            </div>
            <span className="genre">{genres}</span>
        </div>
    )
}

Item.propTypes = {
    movie: PropTypes.object,
}

export default Item
