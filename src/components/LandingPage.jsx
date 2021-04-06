import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CONSTANTS from '../constants/constants'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <div className="landing-page">
                <h3 className="landing-page-message"> {CONSTANTS.PLEASE_SEARCH}</h3>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
