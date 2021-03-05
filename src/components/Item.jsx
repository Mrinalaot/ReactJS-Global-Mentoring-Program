import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import AddOrEditMovie from './AddOrEditMovie'
import DeleteMovie from './DeleteMovie'

const Item = ({ movie }) => {
    const [mode, setMode] = useState('')

    const onMovieEdit = () => setMode('edit')
    const onMovieDelete = () => setMode('delete')
    const onClose = () => setMode('')

    const genres = movie.genres.join(' & ')

    return (
        <div>
            <Menu edit={onMovieEdit} delete={onMovieDelete} />
            <AddOrEditMovie show={['add', 'edit'].includes(mode)} mode={mode} onClose={onClose}/>
            <DeleteMovie show={['delete'].includes(mode)} mode={mode} onClose={onClose} />
            <img
                src={movie.poster_path}
                className="thumbnails"
                alt={movie.overview}
            />
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