import React from 'react';

import { ButtonContainer, ButtonOverlay } from './button.styles';

const Btn = ({ children, fullWidth, ...otherProps }) => (
    <ButtonContainer fullWidth={fullWidth} { ...otherProps } >
        <ButtonOverlay>{ children }</ButtonOverlay>
    </ButtonContainer>
);

export default Btn;