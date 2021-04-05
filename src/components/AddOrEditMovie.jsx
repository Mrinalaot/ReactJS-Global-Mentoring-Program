import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CONSTANTS from '../constants/constants'
import { setMode, updateMovie, createMovie } from '../store/actions/ActionCreators'

import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const AddOrEditMovie = ({ show }) => {
    const dispatch = useDispatch()

    const mode = useSelector((state) => state.movies.mode)
    const selectedMovie = useSelector((state) => state.movies.selectedMovie)

    const id = selectedMovie && selectedMovie.id;

    const isAddMode = (mode === 'add');

    const initialValues = {
        title: '',
        release_date: '',
        poster_path: '',
        genres: '',
        overview: '',
        runtime: ''
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        release_date: Yup.string()
            .required('Release Date is required'),
        poster_path: Yup.string()
            .required('Movie Url is required'),
        genres: Yup.array()
            .required('Genre is required'),
        overview: Yup.string()
            .required('Overview is required'),
        runtime: Yup.number()
            .required('Runtime is required'),
    });

    function addMovie(fields) {
        try {
            dispatch(createMovie(fields));
            dispatch(setMode('none'))
        } catch (err) {
            console.log(err)
        }
    }

    function editMovie(fields) {
        try {
            dispatch(updateMovie({ ...selectedMovie, ...fields }));
            dispatch(setMode('none'))
        } catch (err) {
            console.log(err)
        }
    }

    function onSubmit(fields, { setStatus }) {
        setStatus();
        if (isAddMode) {
            addMovie(fields);
        } else {
            editMovie(fields);
        }
    }

    return (
        <Modal
            className="my-modal"
            show={show}
            onHide={() => dispatch(setMode('none'))}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ dirty, errors, touched, isSubmitting, setFieldValue }) => {
                    const [movie, setMovie] = useState({});
                    useEffect(() => {
                        if (!isAddMode) {
                            // get user and set form fields
                            const fields = ['title', 'release_date', 'poster_path', 'genres', 'overview', 'runtime'];
                            fields.forEach((field) => setFieldValue(field, selectedMovie[field], false));
                            setMovie(movie);
                        }
                    }, []);
                    return (
                        <Form>
                            <Modal.Dialog scrollable size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        {isAddMode
                                            ? CONSTANTS.ADD_MOVIE_TITLE
                                            : CONSTANTS.EDIT_MOVIE_TITLE}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Title</label>
                                            <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} />
                                            <ErrorMessage name="title" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Release Date</label>
                                            <Field name="release_date" type="text" className={'form-control' + (errors.release_date && touched.release_date ? ' is-invalid' : '')} />
                                            <ErrorMessage name="release_date" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Movie Url</label>
                                            <Field name="poster_path" type="text" className={'form-control' + (errors.poster_path && touched.poster_path ? ' is-invalid' : '')} />
                                            <ErrorMessage name="poster_path" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Genres</label>
                                            <Field name="genres" type="text" className={'form-control' + (errors.genres && touched.genres ? ' is-invalid' : '')} />
                                            <ErrorMessage name="genres" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Movie Overview</label>
                                            <Field name="overview" type="text" className={'form-control' + (errors.overview && touched.overview ? ' is-invalid' : '')} />
                                            <ErrorMessage name="overview" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Runtime</label>
                                            <Field name="runtime" type="number" className={'form-control' + (errors.runtime && touched.runtime ? ' is-invalid' : '')} />
                                            <ErrorMessage name="runtime" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={() => dispatch(setMode('none'))}
                                    >
                                        {CONSTANTS.RESET}
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={!dirty || Object.keys(errors).length > 0} className="btn btn-primary"
                                        className="red lighten-1 btn right"
                                    >
                                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                        {CONSTANTS.SUBMIT}
                                    </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Form>
                    )
                }}
            </Formik>
        </Modal>
    )
}

AddOrEditMovie.propTypes = {
    show: PropTypes.bool,
}

export default AddOrEditMovie
