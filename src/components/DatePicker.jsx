import 'react-datepicker/dist/react-datepicker.css'

import DateView from 'react-datepicker';
import { Field } from 'formik';
import React from 'react'

export default function DatePicker(props) {
    const { label, name, errors, touched, ...rest } = props;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest} className={'form-control' + (errors.release_date && touched.release_date ? ' is-invalid' : '')}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form;
                        const { value } = field;
                        return <DateView id={name} {...field} dateFormat="dd/mm/yyyy" value={value} selected={value ? new Date(value) : ''} onChange={(val) => {
                            setFieldValue(name, new Date(val).toISOString())
                        }} {...rest}></DateView>
                    }
                }
            </Field>
            {/* <ErrorMessage name={name} className="invalid-feedback" /> */}
        </div>
    )
}
