import initialState from './initialState'
import ACTION_TYPES from '../actions/actionTypes'

function sortby(state = initialState.sortby, action) {
    switch (action.type) {
        case ACTION_TYPES.SORT_MOVIES:
            state = action.sortby
            return state
        default:
            return state
    }
}

export default sortby
