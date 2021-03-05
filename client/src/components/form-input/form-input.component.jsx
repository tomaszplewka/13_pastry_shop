import React from 'react';

import { InputGroup, Label, Input } from './form-input.styles';

const FormInput = ({ onChange, label, ...otherProps }) => (
    <InputGroup inline={otherProps.inline}>
        <Label hide={otherProps.hide} htmlFor={otherProps.id}>{label}</Label>
        <Input onChange={onChange} inline={otherProps.inline} { ...otherProps } />
    </InputGroup>
);

export default FormInput;