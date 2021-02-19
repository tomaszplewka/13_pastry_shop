import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    position: relative;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled(Link)`
    padding: 1rem;
`;

export const HeaderMenuContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const MenuItemLink = styled(Link)`
    width: 120px;
    height: 50px;
    margin: 0.5rem auto;
    color: #4274D3;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.15rem;
    line-height: 50px;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    cursor: pointer;
    
    &:hover svg rect {
        stroke: #4274D3;
        stroke-width: 3;
        stroke-dasharray: 40, 245;
        stroke-dashoffset: 75;
        transition: all 0.5s ease-in-out;
    }
`;