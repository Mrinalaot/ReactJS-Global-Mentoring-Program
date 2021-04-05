import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMovie, setMode } from '../store/actions/ActionCreators'

const DeleteMovie = ({ show }) => {
    const dispatch = useDispatch()
    const selectedMovie = useSelector(state => state.movies.selectedMovie)

    const onClickDelete = () => {
        console.log(selectedMovie);
        try {
            dispatch(deleteMovie(selectedMovie.id));
            dispatch(setMode('none'))
        }
        catch (err) {
            console.log(err)
        }
    }

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
                        onClick={() => onClickDelete()}
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
