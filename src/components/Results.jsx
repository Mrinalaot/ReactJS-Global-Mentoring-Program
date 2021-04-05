import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import CONSTANTS from '../constants/constants'
import { useDispatch } from 'react-redux'
import {
    loadMovies,
    searchBy,
    searchMovieChange,
    sortMovies,
} from '../store/actions/ActionCreators'

const Results = ({ items }) => {
    const dispatch = useDispatch()

    const onSortSelected = (event) => {
        dispatch(sortMovies(event.target.value))
        dispatch(loadMovies())
    }

    const onGenreSelected = (genre) => {
        dispatch(searchBy('genre'))
        dispatch(searchMovieChange(genre))
        dispatch(loadMovies())
    }

    return (
        <>
            <div className="filters row bar grey lighten-1">
                <div className="left col s12">
                    <ul className="tabs grey lighten-1">
                        {[
                            'ALL',
                            'DOCUMENTARY',
                            'COMEDY',
                            'HORROR',
                            'CRIME',
                        ].map((element) => (
                            <li
                                className="tab col s3 white-text text-darken-2 grey lighten-1 filter-bar left"
                                key={element}
                                onClick={() => onGenreSelected(element)}
                            >
                                {element}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sort-section right">
                    <div className="select input-field col s12">
                        <Form.Label></Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue="default"
                            onChange={(event) => onSortSelected(event)}
                        >
                            <option value="default" disabled>
                                {CONSTANTS.SORT}
                            </option>
                            <option value="release_date">
                                {CONSTANTS.RELEASE}
                            </option>
                            <option value="vote_average">
                                {CONSTANTS.RATING}
                            </option>
                        </Form.Control>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bar grey lighten-1">
                <li className="white-text text-darken-2 grey lighten-1 filter-bar left">
                    {items + ' ' + CONSTANTS.MOVIES_FOUND}
                </li>
            </div>
        </>
    )
}

Results.propTypes = {
    items: PropTypes.number,
}

export default Results
