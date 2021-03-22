import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../constants/constants';

const MovieDetails = ({ movie }) => {
    const MovieDetails = movie ? (
        <div className="movie-wrapper">
            <div className="movie-header">
                <h5 className="red-text text-darken-2">{CONSTANTS.NETFLIX}</h5>
                <button className="red lighten-1 btn right">
                    {CONSTANTS.SEARCH}
                </button>
            </div>
            <div className="movie-poster">
                <img className="thumbnails-details" src={movie.poster_path} />
            </div>
            <div className="movie-detail">
                <h2 className="white-text text-darken-2 title-details">
                    {movie.title}
                </h2>
                <h5 className="green-text text-darken-2 avg-rating">
                    {movie.vote_average}
                </h5>
                <p className="white-text text-darken-2">
                    {movie.genres.join(' & ')}
                </p>
                <p className="release-date-runtime">
                    <span className="red-text text-darken-2">
                        {movie.release_date}
                    </span>
                    <span className="red-text text-darken-2">
                        {movie.runtime + 'min'}
                    </span>
                </p>
                <p className="white-text text-darken-2">{movie.overview}</p>
            </div>
        </div>
    ) : null

    return <div>{MovieDetails}</div>
}

MovieDetails.propTypes = {
    movie: PropTypes.object,
}

export default MovieDetails