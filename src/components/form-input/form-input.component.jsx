import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="input-group">
        <label
            className={`form-input-label`}
            htmlFor={otherProps.id}
        >
            {label}
        </label>
        <input
            className="form-input"
            onChange={handleChange}
            placeholder={otherProps.placeholder}
            id={otherProps.id}
        />
    </div>
);

export default FormInput;