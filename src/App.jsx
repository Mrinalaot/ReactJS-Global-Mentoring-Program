import './style.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Redirect, Route, Switch } from 'react-router-dom'

import CONSTANTS from './constants/constants'
import LandingPage from './components/LandingPage'
import MovieDetails from './components/MovieDetails'
import NotFound404Page from './components/404NotFoundPage'
import React from 'react'
import SearchPage from './components/SearchPage'
import classNames from 'classnames'
import { useDocumentTitle } from './components/CustomHooks'
import { useSelector } from 'react-redux'

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
                <Route path='/search/' exact={true} component={SearchPage} />
                <Route path='/search/:query' component={SearchPage} />
                <Route path='/film/:id' exact={true} component={MovieDetails} />
                <Route path='/' exact={true} component={LandingPage} />
                <Route path='/404' component={NotFound404Page} />
                <Redirect from='/*' to="/404" />
            </Switch>
        </React.Fragment>
    )
}

export default App
