import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const DeleteMovie = ({ show, onClose, onSubmit, mode = 'add' }) => {
    const handleClose = () => onClose()
    const handleSubmit = () => onSubmit()

    return (
        <>
            <Modal className="my-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>DELETE MOVIE</Modal.Title>
                </Modal.Header>
                <Modal.Body className="my-modal">
                    <p>Are you sure you want to delete this movie?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button className="red lighten-1 btn right" onClick={handleSubmit}>CONFIRM</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteMovie