import styled from 'styled-components';

export const DeliveryBannerContainer = styled.div`
    background-color: var(--color-yellow);
    position: relative;
    padding: 2rem;
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