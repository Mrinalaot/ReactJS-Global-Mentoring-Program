import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CONSTANTS from '../constants/constants'

const NotFound404Page = () => {
    return (
        <div>
            <Header />
            <div className="landing-page">
                <h3 className="landing-page-message"> {CONSTANTS.NOT_FOUND_404}</h3>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound404Page
