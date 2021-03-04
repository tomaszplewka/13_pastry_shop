import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
    background-color: var(--color-light);
    background: radial-gradient(circle, rgba(171, 225, 136,.5) 0%, rgba(245,245,245,1) 50%);
    padding: 2rem;
    position: relative;
`;
export const SocialMediaTitle = styled.h3`
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    margin: 1rem;
`;
export const SocialMediaImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`;
export const SocialMediaImgColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    filter: drop-shadow(0 10px 10px rgba(93, 103, 91, .75));
`;
export const SocialMediaImgWrapper = styled.div`
    flex-grow: 1;
    max-width: 500px;
    height: 300px;
    padding: .75rem;
    position: relative;
`;
export const SocialMediaImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: ${props => props.tilted === 'right' ? `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)` : `polygon(0% 0%, 75% 0%, 100% 100%, 25% 100%)`};
`;
export const SocialMediaImgOverlay = styled.div`
    position: absolute;
    top: .75rem;
    left: .75rem;
    width: calc(100% - 2 * .75rem);
    height: calc(100% - 2 * .75rem);
    background-color: transparent;
    clip-path: ${props => props.tilted === 'right' ? `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)` : `polygon(0% 0%, 75% 0%, 100% 100%, 25% 100%)`};
    transition: .3s all ease;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: rgba(1, 1, 16, .5);
        transition: .3s all ease;
        & svg {
            color: var(--color-light);
            transition: .3s all ease;
        }
    }
    `;
export const SocialMediaIcon = styled.svg`
    font-size: 1.75rem;
    margin: .5rem;
    color: transparent;
    transition: .3s all ease;
    transform: scale(1);
    &:hover {
        color: var(--color-dark-salmon) !important;
        transform: scale(1.25);
        transition: .3s all ease;
    }
`;