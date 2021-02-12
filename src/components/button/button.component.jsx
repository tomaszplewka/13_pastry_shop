import React from 'react';

import './button.styles.scss';

const Btn = ({ children, inverted, ...otherProps }) => (
    <button className={`btn 
        ${inverted ? 'btn-inverted' : ''}`}
        { ...otherProps }
    >
        <span>{ children }</span>
    </button>
);

export default Btn;