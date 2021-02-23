import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ onChange, label, ...otherProps }) => (
    <div className="input-group">
        <label
            className={`form-input-label`}
            htmlFor={otherProps.id}
        >
            {label}
        </label>
        <input
            className="form-input"
            onChange={onChange}
            // placeholder={otherProps.placeholder}
            // id={otherProps.id}
            { ...otherProps }
        />
    </div>
);

export default FormInput;