import React, { Component } from 'react'
import classNames from 'classnames'
import Title from './Title'
import CONSTANTS from '../constants/constants'
import AddMovie from './AddMovie'
import AddOrEditMovie from './AddOrEditMovie'
class Header extends Component {
    state = {
        searchBy: 'title',
        searchStr: '',
        showAddMovie: false,
    }

    handleSearchByClick = (event) => {
        this.setState({
            searchBy: event.target.id,
        })
    }

    handleSearch = () => {
        this.refreshResults()
    }

    refreshResults = () => {
        const base = CONSTANTS.MOVIE_API_BASE_URL;
        const url = `${base}?search=${this.state.searchStr}&searchBy=${this.state.searchBy}`
        console.log(url);
        this.props.refreshResults(url)
    }

    handleChange = (event) => {
        this.setState({
            searchStr: event.target.value,
        })
    }

    handleKeyDown = (event) => {
        if (event.keyCode === 13 && event.target.value !== '') {
            this.handleSearch()
        }
    }

    onAddMovieClick = () => {
        this.setState({
            showAddMovie: true,
        })
    }

    onClose = () => {
        this.setState({ showAddMovie: false })
    }

    onAddMovieSubmit = () => {
        // this.setState({ showAddMovie: false })
        alert('Submitted')
    }

    render() {
        const { searchBy } = this.state

        const titleClass = classNames('lighten-1 btn buttons', {
            red: searchBy === 'title',
            grey: searchBy === 'genre',
        })

        const genreClass = classNames('lighten-1 btn buttons', {
            red: searchBy === 'genre',
            grey: searchBy === 'title',
        })

        return (
            <header className="header">
                  <div className="title-container">
                    <Title />
                    <AddMovie add={this.onAddMovieClick} />
                    {this.state.showAddMovie ? (
                        <AddOrEditMovie show={this.state.showAddMovie} onClose={this.onClose} onSubmit={this.onAddMovieSubmit} />
                    ) : (
                        ''
                    )}
                </div>
                <h4 className="white-text text-darken-2">{CONSTANTS.FIND}</h4>
                <input
                    type="text"
                    placeholder="Enter the title"
                    className="input-field white-text"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <div>
                    <h6 className="white-text text-darken-2 left">
                        {CONSTANTS.SEARCH_BY}
                    </h6>
                    <button
                        id="title"
                        className={titleClass}
                        onClick={this.handleSearchByClick}
                    >
                        {CONSTANTS.TITLE}
                    </button>
                    <button
                        id="genre"
                        className={genreClass}
                        onClick={this.handleSearchByClick}
                    >
                        {CONSTANTS.GENRE}
                    </button>
                    <button
                        className="red lighten-1 btn right"
                        onClick={this.handleSearch}
                    >
                        {CONSTANTS.SEARCH}
                    </button>
                </div>
            </header>
        )
    }
}

export default Header