import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import CONSTANTS from '../constants/constants'

const Results = ({ items }) => {
    return (
        <>
            <div className="filters row bar grey lighten-1">
                <div className="left col s12">
                    <ul className="tabs grey lighten-1">
                        <li className="tab col s3 white-text text-darken-2 grey lighten-1 filter-bar left">
                            ALL
                        </li>
                        <li className="tab col s3 white-text text-darken-2 grey lighten-1 filter-bar left">
                            DOCUMENTARY
                        </li>
                        <li className="tab col s3 white-text text-darken-2 grey lighten-1 filter-bar left">
                            COMEDY
                        </li>
                        <li className="tab col s3 white-text text-darken-2 grey lighten-1 filter-bar left">
                            HORROR
                        </li>
                        <li className="tab col s3 white-text text-darken-2 grey lighten-1 filter-bar left">
                            CRIME
                        </li>
                    </ul>
                </div>
                <div className="sort-section right">
                    {/* <div className="select input-field col s12">
                        <select className="browser-default">
                            <option value="" disabled selected>
                                {CONSTANTS.SORT}
                            </option>
                            <option value="1">{CONSTANTS.RELEASE}</option>
                            <option value="1">{CONSTANTS.RATING}</option>
                        </select>
                    </div> */}

                    <div className="select input-field col s12">
                        <Form.Label></Form.Label>
                        <Form.Control as="select" defaultValue="default">
                            <option value="default" disabled>
                                {CONSTANTS.SORT}
                            </option>
                            <option value="1">{CONSTANTS.RELEASE}</option>
                            <option value="1">{CONSTANTS.RATING}</option>
                        </Form.Control>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bar grey lighten-1">
                <li className="white-text text-darken-2 grey lighten-1 filter-bar left">
                    {items + ' ' + CONSTANTS.MOVIES_FOUND}
                </li>
            </div>
        </>
    )
}

Results.propTypes = {
    items: PropTypes.number,
}

export default Results