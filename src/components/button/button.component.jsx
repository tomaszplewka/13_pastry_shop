import React from 'react';

// import './button.styles.scss';

import { ButtonContainer } from './button.styles';

const Btn = ({ children, inverted, ...otherProps }) => (
    <ButtonContainer { ...otherProps } >
        <span>{ children }</span>
    </ButtonContainer>
);

export default Btn;