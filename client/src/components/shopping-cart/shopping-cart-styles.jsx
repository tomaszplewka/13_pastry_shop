import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;
export const ShoppingCartIcon = styled.span`
    position: relative;
    margin: 0 .75rem;
`;
export const ShoppingCartIconSvg = styled.svg`
    position: relative;
    font-size: 3rem;
    color: var(--color-apricot);
    transition: .3s all ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        transition: .3s all ease;
        
        & + .shopping-cart-icon-item-count {
            transform: translateY(-5px);
            transition: .3s all ease;
        }
    }
`;
export const ShoppingCartItemCount = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    right: calc(-50%);
    background-color: var(--color-ebony);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: white;
    font-size: 1.25rem;
    transition: .3s all ease;
    cursor: pointer;
`;