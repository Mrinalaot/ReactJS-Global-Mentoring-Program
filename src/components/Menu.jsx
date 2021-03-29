import React from 'react'
import PropTypes from 'prop-types'
import CONSTANTS from '../constants/constants'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setMode } from '../store/actions/ActionCreators'

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

const Menu = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Navbar className="nav-menu">
                <Nav>
                    <NavDropdown title={dotMenu}>
                        <NavDropdown.Item
                            onClick={() => dispatch(setMode('edit'))}
                        >
                            {CONSTANTS.EDIT}
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            onClick={() => dispatch(setMode('delete'))}
                        >
                            {CONSTANTS.DELETE}
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </>
    )
}

export default Menu
