import styled from 'styled-components';

export const InputGroup = styled.div`
    width: ${props => props.inline ? '50%' : '100%'};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Label = styled.label`
    display: ${props => props.hide ? 'none' : 'inline'};
    width: 50%;
    margin-bottom: 10px;
    color: var(--color-light);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-indent: 10px;
    font-weight: 700;
    cursor: pointer;
    &:hover ~ input {
        background: var(--color-dark);
    }
`;
export const Input = styled.input`
    width: ${props => props.inline ? '100%' : '50%'};
    padding: .5rem .4rem;
    margin: 0rem ${props => props.inline ? '.5rem' : '0'} .75rem;
    font-size: .8rem;
    background: linear-gradient(var(--color-ebony), var(--color-dark));
    border: 1px solid var(--color-dark);
    box-shadow: 0 10px 10px rgba(var(--color-light), 1);
    border-radius: 5px;
    // font-family: ;
    color: var(--color-light);
    &:hover {
        background: var(--color-dark);
    }
    &:focus {
        box-shadow: inset 0 0 10px var(--color-dark);
        background: var(--color-ebony);
        border: 1px solid var(--color-light);
        outline: none;
    }
`;