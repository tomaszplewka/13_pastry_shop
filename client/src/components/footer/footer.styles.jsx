import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    padding: 2rem 2rem 4rem;
    background-color: var(--color-dark);
    color: var(--color-light);
    text-align: center;
`;
export const FooterSubscribeFormContainer = styled.div`
    margin: 0 auto;
    max-width: 400px;
`;
export const SubscribeFormTitle = styled.h3`
    /* font-family */
    font-size: 1.75rem;
    font-weight: 600;
`;
export const SubscribeFormSubitle = styled.h3`
    /* font-family */
    font-size: 1.1rem;
    font-weight: 600;
    margin: .5rem 0;
`;
export const SubscribeForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
export const FormInputContainer = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
`;
export const HorizontalLine = styled.hr`
    width: 85%;
    border-width: 1px;
    border-color: var(--color-light);
    margin: 2rem auto;
`;
export const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;
export const MenuItemLink = styled(Link)`
    margin: 0 0.5rem;
    color: var(--color-light);
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    cursor: pointer;
`;
export const SocialMediaIcon = styled.svg`
    font-size: 1.75rem;
    margin: .5rem;
    color: var(--color-light);
    transition: .3s all ease;
    transform: scale(1);
    &:hover {
        color: var(--color-dark-salmon) !important;
        transform: scale(1.25);
        transition: .3s all ease;
    }
`;
export const VisitUs = styled.h4`
    /* font-family */
    font-size: 1.35rem;
    font-weight: 600;
    text-transform: uppercase;
`;