import styled from 'styled-components';

export const DeliveryBannerContainer = styled.div`
    background-color: var(--color-yellow);
    background: radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(247,239,153,1) 32.5%);
    position: relative;
    padding: 4rem 2rem;
`;
export const DeliveryBannerTitle = styled.h3`
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    margin: 1rem;
`;
export const DeliveryBannerSubitle = styled.p`
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
    margin: 0.5rem;
`;
export const DeliveryBannerIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0 10px 10px rgba(93, 103, 91, .75));
`;
export const DeliveryBannerIconContainer = styled.div`
    text-align: center;
    margin-bottom: 1rem;
`;
export const DeliveryBannerIcon = styled.img`
    width: 150px;
    object-fit: cover;
    margin: 0 auto;
    cursor: pointer;
`;