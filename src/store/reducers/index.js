import { combineReducers } from 'redux'
import movies from './movies'
import search from './search'
import sortby from './sortby'

export default combineReducers({ sortby, movies, search })
