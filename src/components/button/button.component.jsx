import React from 'react';

import './button.styles.scss';

const Btn = ({ children, ...otherProps }) => (
    <button className='btn' { ...otherProps }>
        <span>{ children }</span>
    </button>
);

export default Btn;