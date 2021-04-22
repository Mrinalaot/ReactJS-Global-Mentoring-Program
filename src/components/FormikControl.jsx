import CheckBoxGroup from './CheckBoxGroup';
import DatePicker from './DatePicker';
import React from 'react'

export default function FormikControl(props) {
    const { control, ...rest } = props;
    const { name, errors } = rest;
    switch (control) {
        case 'date-picker':
            return <>
                <DatePicker {...rest} />
                {(errors && errors[`${name}`]) ? <div className="invalid-feedback" style={{ display: 'block' }}>{errors[`${name}`]}</div> : null}
            </>
        case 'checkbox':
            return <>
                <CheckBoxGroup {...rest} />
                {(errors && errors[`${name}`]) ? <div className="invalid-feedback" style={{ display: 'block' }}>{errors[`${name}`]}</div> : null}
            </>
        default:
            return null;
    }
}
