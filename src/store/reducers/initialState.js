const initialState = {
    search: {
        searchby: 'title',
        phrase: '',
    },
    sortby: 'date',
    movies: {
        data: [],
        status: null,
        selectedMovie: null,
        isLoading: false,
        mode: 'none',
    },
}
export default initialState
