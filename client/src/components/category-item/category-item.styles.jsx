import styled from 'styled-components';

export const CategoryItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 360px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transition: all .5s ease-in-out;
    &:hover {
        div:first-child {
            transform: scale(1.25);
            transition: all 3s ease;
        }
        div:last-child {
            background-color: rgba(245, 245, 245, 1);
        }
    }

`;
export const CategoryItemBackgroundImg = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: all 3s ease;
`;
export const CategoryItemContent = styled.div`
    background-color: rgba(245, 245, 245, 0.5);
    height: 150px;
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    clip-path: polygon(25% 0%, 75% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transition: all .5s ease-in-out;
    cursor: pointer;
`;
export const CategoryItemTitle = styled.h3`
    margin: 0;
    padding: 0.5rem;
    font-weight: 600;
    position: relative;
    z-index: 3;
    line-height: 1em;
    text-transform: lowercase;
    font-size: 1.75rem;
`;