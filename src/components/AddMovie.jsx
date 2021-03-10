import React from 'react'
import CONSTANTS from '../constants/constants'
import PropTypes from 'prop-types'

const AddMovie = ({ add }) => (
    <>
        <button className="red lighten-1 btn right" onClick={add}>
            {CONSTANTS.ADD_MOVIE}
        </button>
    </>
)

AddMovie.propTypes = {
    add: PropTypes.func
}

export default AddMovie