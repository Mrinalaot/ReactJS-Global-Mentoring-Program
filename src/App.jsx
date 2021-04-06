import React from 'react'
import classNames from 'classnames'
import './style.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchPage from './components/SearchPage'
import LandingPage from './components/LandingPage'
import { useDocumentTitle } from './components/CustomHooks'
import CONSTANTS from './constants/constants'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import NotFound404Page from './components/404NotFoundPage'

const App = () => {
    const isLoading = useSelector((state) => state.movies.isLoading)
    const data = useSelector((state) => state.movies.data)

    useDocumentTitle(CONSTANTS.NETFLIX)

    const loading = classNames({
        loading: isLoading,
        none: !isLoading,
    })

    return (
        <React.Fragment>
            <div className={loading}>Loading&#8230;</div>
            <Switch>
                <Route path='/search/:query' exact={false} component={SearchPage} />
                <Route path='/film/:id' exact component={MovieDetails} />
                <Route path='/' component={LandingPage} />
                <Route path='/*' component={NotFound404Page} />
            </Switch>
        </React.Fragment>
    )
}

export default App
