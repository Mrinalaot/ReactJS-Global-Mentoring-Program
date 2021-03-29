import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const MoviesList = ({ movies }) => (
    <div className="movies-list">
        {movies.map((movie) => (
            <Item
                movie={movie}
                key={movie.id}
            />
        ))}
    </div>
)

MoviesList.propTypes = {
    movies: PropTypes.array,
}

export default MoviesList
