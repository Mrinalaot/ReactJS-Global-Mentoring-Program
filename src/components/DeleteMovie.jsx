import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setMode } from '../store/actions/ActionCreators'

const DeleteMovie = ({ show }) => {
    const dispatch = useDispatch()

    return (
        <>
            <Modal
                className="my-modal"
                show={show}
                onHide={() => dispatch(setMode('none'))}
            >
                <Modal.Header closeButton>
                    <Modal.Title>DELETE MOVIE</Modal.Title>
                </Modal.Header>
                <Modal.Body className="my-modal">
                    <p>Are you sure you want to delete this movie?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        className="red lighten-1 btn right"
                        onClick={() => dispatch(setMode('none'))}
                    >
                        CONFIRM
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

DeleteMovie.propTypes = {
    show: PropTypes.bool,
}

export default DeleteMovie
