import React, { Component } from 'react'
import classNames from 'classnames'
import './style.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchPage from './components/SearchPage'
import axios from 'axios'
import movies from './constants/movies'

class App extends Component {
    state = {
        data: movies.slice(0, 9),
        isLoading: false,
    }

    refreshResults = (url) => {
        this.setState({
            isLoading: true,
        })
        axios.get(url).then((response) => {
            this.setState({
                data: response.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const loading = classNames({
            loading: this.state.isLoading,
            none: !this.state.isLoading,
        })
        return (
            <React.Fragment>
                <div className={loading}>Loading&#8230;</div>
                <SearchPage
                    movies={this.state.data}
                    refreshResults={this.refreshResults}
                />
            </React.Fragment>
        )
    }
}

export default App
