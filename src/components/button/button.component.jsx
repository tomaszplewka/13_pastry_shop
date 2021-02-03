import React from 'react';

import './button.styles.scss';

const Btn = ({ children, ...otherProps }) => (
    <button className='btn' { ...otherProps }>
        { children }
    </button>
);

export default Btn;