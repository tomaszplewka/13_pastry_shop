import styled from 'styled-components';

export const ShoppingCartSearch = styled.span`
    margin: 0 .75rem;
`;
export const ShoppingCartSearchIcon = styled.svg`
    position: relative;
    font-size: 2.5rem;
    color: var(--color-apricot);
    transition: .3s all ease;
    cursor: pointer;

    &:hover {
        color: darken(#F1BB87, 20%);
        transform: rotateZ(270deg);
        transition: .3s all ease;
    }
`;