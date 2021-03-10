import React from 'react'
import PropTypes from 'prop-types'
import CONSTANTS from '../constants/constants'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

const dotMenu = (
    <span className="white-text">
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-three-dots-vertical"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            />
        </svg>
    </span>
)

const Menu = ({edit: editFn, delete: deleteFn}) => (
    <>
        <Navbar className="nav-menu">
            <Nav>
                <NavDropdown title={dotMenu}>
                    <NavDropdown.Item onClick={editFn}>
                        {CONSTANTS.EDIT}
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={deleteFn}>
                        {CONSTANTS.DELETE}
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    </>
)

Menu.propTypes = {
    movies: PropTypes.array,
    refreshResults: PropTypes.func,
    edit: PropTypes.func,
    delete: PropTypes.func,
}

export default Menu