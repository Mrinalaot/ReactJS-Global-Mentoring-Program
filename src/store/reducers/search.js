import initialState from './initialState'
import ACTION_TYPES from '../actions/actionTypes'

function search(state = initialState.search, action) {
    switch (action.type) {
        case ACTION_TYPES.SEARCH_BY:
            return {
                ...state,
                searchby: action.searchby,
            }
        case ACTION_TYPES.SEARCH_MOVIE_CHANGE:
            return {
                ...state,
                phrase: action.phrase,
            }
        default:
            return state
    }
}

export default search
