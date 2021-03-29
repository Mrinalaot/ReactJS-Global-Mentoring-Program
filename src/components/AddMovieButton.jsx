import React from 'react'
import CONSTANTS from '../constants/constants'
import { useDispatch } from 'react-redux'
import { setMode } from '../store/actions/ActionCreators'

const AddMovie = () => {
    const dispatch = useDispatch()
    return (
        <>
            <button
                className="red lighten-1 btn right"
                onClick={() => dispatch(setMode('add'))}
            >
                {CONSTANTS.ADD_MOVIE}
            </button>
        </>
    )
}

export default AddMovie
