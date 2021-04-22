import { Field } from 'formik';
import React from 'react'

export default function CheckBoxGroup(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div>
            <label>{label}</label>
            <Field name={name} className="form-control" {...rest}>
                {
                    (form) => {
                        const { field: { value: genres } } = form;
                        return <>
                            <div className="custom-checkbox-group">
                                {options.map((option) => (
                                    <div key={option} className="checkbox-item">
                                        <label>
                                            <span style={{ marginBottom: '0px', paddingRight: '6px' }}>{option}</span>
                                            <Field type="checkbox" {...rest}
                                                className="custom-checkbox" id={option} name={option} value={option} checked={genres.includes(option)} onChange={(e) => {
                                                    const idx = genres.indexOf(option)
                                                    if (e.target.checked) {
                                                        genres.push(option)
                                                    } else {
                                                        genres.splice(idx, 1)
                                                    }
                                                    form.form.setFieldValue(name, genres);
                                                }}></Field>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </>
                    }}
            </Field>
        </div>
    )
}
