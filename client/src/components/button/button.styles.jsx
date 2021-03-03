import styled, { css } from 'styled-components';

const buttonInvertedStyles = css`
    color: red;
`;

const getButtonStyle = props => {
    return props.inverted ? 'buttonInvertedStyles' : '';
};

export const ButtonContainer = styled.button`
    display: block;
    margin: 10px auto;
    padding: 15px;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(rgb(247, 247, 247), #cecdcd);
    text-align: center;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    outline: none;
    transition: all .3s ease;
    background-color: transparent;
    color: #f7f7f7;
    box-shadow:
        // inset -10px -10px 10px rgba(255,255,255,0.3),
        inset 10px 10px 10px rgba(247, 247, 247, 0.2),
        inset -10px -10px 10px rgba(247, 247, 247,0.2);
    letter-spacing: 2px;
    // font-family: ;
    font-weight: 500;
    font-size: 15px;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
    cursor: pointer;
    width: 50%;

    span {
        position: relative;
        z-index: 10;
    }

    &:after {
        position: absolute;
        transition: all .3s ease;
        content: '';
        width: 0;
        bottom: -5px;;
        background: linear-gradient(#f7f7f7, #cecdcd);
        height: 120%;
        left: -10%;
        transform: skewX(15deg);
    }

    &:hover {
        color: #1f2124;
        box-shadow:
            5px 5px 10px rgba(247, 247, 247, 0.2),
            -5px -5px 10px rgba(247, 247, 247,0.2);
        transition: all .3s ease;

        &:after {
            left: -10%;
            width: 120%;
            transition: all .3s ease;
        }
    }

    &:active {
        border-color: rgba(0,0,0,0.9);
        transition: all .3s ease;
        color: #1f2124;
    }

    ${getButtonStyle}
`;