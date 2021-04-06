import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import { selectMovie } from '../store/actions/ActionCreators'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

const Item = ({ movie }) => {
    const dispatch = useDispatch()

    const genres = movie.genres.join(' & ')

    return (
        <div className="card-panel hoverable movie-card">
            <Menu movie={movie} />
            <div>
                <Link to={`/film/${movie.id}`}>
                    <img
                        src={movie.poster_path}
                        className="thumbnails"
                        alt={movie.overview}
                        onClick={() => dispatch(selectMovie(movie))}
                    />
                </Link>
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
