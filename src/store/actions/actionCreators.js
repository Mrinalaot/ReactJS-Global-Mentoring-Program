import axios from 'axios'
import CONSTANTS from '../../constants/constants'
import ACTION_TYPES from '../actions/actionTypes'

export const searchBy = (searchby) => ({
    type: ACTION_TYPES.SEARCH_BY,
    searchby,
})

export const sortMovies = (sortby) => ({
    type: ACTION_TYPES.SORT_MOVIES,
    sortby,
})

export const searchMovieChange = (phrase) => ({
    type: ACTION_TYPES.SEARCH_MOVIE_CHANGE,
    phrase,
})

export const loadMoviesSuccess = (response) => {
    const movies = response.data.data
    return {
        type: ACTION_TYPES.LOAD_MOVIES_SUCCESS,
        movies,
    }
}

export const loadMoviesError = (error) => ({
    type: ACTION_TYPES.LOAD_MOVIES_ERROR,
    error,
})

export const loadMoviesRequest = () => ({
    type: ACTION_TYPES.LOAD_MOVIES,
})

export const selectMovie = (movie) => ({
    type: ACTION_TYPES.SELECT_MOVIE,
    movie,
})

export const persistLastSearchPhrase = (lastSearchPhrase) => {
    return {
        type: ACTION_TYPES.PERSIST_LAST_SEARCH_PHRASE,
        lastSearchPhrase,
    }
}

export const loadMovieDetailsSuccess = (movie) => ({
    type: ACTION_TYPES.LOAD_MOVIE_DETAILS_SUCCESS,
    movie,
})

export const loadMovieSimilarGenre = (movies) => ({
    type: ACTION_TYPES.LOAD_MOVIES_SIMILAR_GENRE,
    movies,
})

export const setIsLoading = (payload) => ({
    type: ACTION_TYPES.IS_LOADING,
    payload,
})

export const setMode = (mode) => ({
    type: ACTION_TYPES.SET_MODE,
    mode,
})

export const buildUrl = (searchBy, phrase, sort) => {
    const searchByTitleOrGenre = `&searchBy=${
        searchBy === 'title' ? 'title' : 'genres'
    }`
    const searchPhrase = `?search=${phrase.toLowerCase()}`
    const order = '&sortOrder=desc'
    const sortBy = `&sortBy=${sort}`
    const limit = '&limit=15'

    return `${CONSTANTS.baseURL}${searchPhrase}${searchByTitleOrGenre}${sortBy}${order}${limit}`
}

export const loadMovies = () => async (dispatch, getState) => {
    dispatch(loadMoviesRequest())
    const { search, sortby, movies } = getState()
    const url = buildUrl(search.searchby, search.phrase, sortby)
    dispatch(setIsLoading(true))
    return axios
        .get(url)
        .then((response) => {
            dispatch(loadMoviesSuccess(response))
        })
        .catch((error) => {
            dispatch(loadMoviesError(error))
        })
        .finally(() => {
            dispatch(setIsLoading(false))
        })
}

export const getMovie = (id) => async (dispatch) => {
    const url = `${baseURL}/${id}`
    return axios
        .get(url)
        .then((movie) => {
            dispatch(loadMovieDetailsSuccess(movie))
            const genre = movie.data.genres[0]
            return genre
        })
        .then((genre) => {
            const urlByGenre = buildUrl('genres', genre)
            return axios.get(urlByGenre)
        })
        .then((moviesbyGenre) => {
            dispatch(loadMovieSimilarGenre(moviesbyGenre))
        })
}
