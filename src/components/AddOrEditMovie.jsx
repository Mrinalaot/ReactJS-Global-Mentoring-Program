import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import CONSTANTS from '../constants/constants'

const AddOrEditMovie = ({ show, onClose, onSubmit, mode = 'add' }) => {
    const handleClose = () => onClose()
    const handleSubmit = () => onSubmit()

    return (
        <>
            <Modal className="my-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{mode === 'add' ? CONSTANTS.ADD_MOVIE_TITLE : CONSTANTS.EDIT_MOVIE_TITLE}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="my-model">
                        <Form>
                            <Form.Group controlId="title">
                                <Form.Label>TITLE</Form.Label>
                                <Form.Control type="text" placeholder="Title" />
                            </Form.Group>

                            <Form.Group controlId="release_date">
                                <Form.Label>RELEASE DATE</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Release Date"
                                />
                            </Form.Group>
                            <Form.Group controlId="url">
                                <Form.Label>MOVIE URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Movie URL"
                                />
                            </Form.Group>
                            <Form.Group controlId="genre">
                                <Form.Label>GENRE</Form.Label>
                                <Form.Control as="select" defaultValue="default">
                                    <option value="default" disabled>PLEASE CHOOSE</option>
                                    <option>DOCUMENTARY</option>
                                    <option>COMEDY</option>
                                    <option>HORROR</option>
                                    <option>CRIME</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="overview">
                                <Form.Label>OVERVIEW</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Overview"
                                />
                            </Form.Group>
                            <Form.Group controlId="runtime">
                                <Form.Label>RUNTIME</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="RUNTIME"
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {CONSTANTS.RESET}
                    </Button>
                    <Button
                        className="red lighten-1 btn right"
                        onClick={handleSubmit}
                    >
                        {CONSTANTS.SUBMIT}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddOrEditMovie