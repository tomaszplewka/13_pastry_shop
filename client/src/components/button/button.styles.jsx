import styled from 'styled-components';

export const ButtonOverlay = styled.span`
    position: relative;
    z-index: 10;
`;
export const ButtonContainer = styled.button`
    display: block;
    width: ${props => props.fullWidth ? '100%' : '50%'};
    margin: 1rem 0;
    padding: 15px;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(var(--color-light), var(--color-blue));
    text-align: center;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    outline: none;
    transition: all .3s ease;
    background-color: transparent;
    color: var(--color-light);
    box-shadow:
        inset 10px 10px 10px rgba(245, 245, 245, 0.2),
        inset -10px -10px 10px rgba(245, 245, 245,0.2);
    letter-spacing: 2px;
    // font-family: ;
    font-weight: 500;
    font-size: 1rem;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        bottom: -5px;;
        left: -10%;
        width: 0;
        height: 120%;
        background: linear-gradient(var(--color-light), var(--color-blue));
        transform: skewX(15deg);
        transition: all .3s ease;
    }
    &:hover {
        color: var(--color-dark);
        box-shadow:
            5px 5px 10px rgba(245, 245, 245, 0.2),
            -5px -5px 10px rgba(245, 245, 245,0.2);
        transition: all .3s ease;
        &:after {
            left: -10%;
            width: 120%;
            transition: all .3s ease;
        }
    }
    &:active {
        border-color: rgba(0,0,0,0.9);
        color: var(--color-dark);
        transition: all .3s ease;
    }
`;