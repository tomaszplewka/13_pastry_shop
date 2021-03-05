import styled from 'styled-components';

export const SignUpContainer = styled.div`
    // font-family: ;
    font-weight: 500;
    max-width: 400px;
    position: relative;
    margin: auto;
    padding: 2rem;
    margin-top: 4rem;
    overflow: hidden;
    background-color: var(--color-dark);
    border-radius: 10px;
    border: 1px solid var(--color-dark);
    box-shadow: 0 10px 10px rgba(93, 103, 91, .75);
    color: var(--color-light);
    &::after {
        content: "";
        height: 1px;
        width: 33%;
        position: absolute;
        left: 20%;
        top: 0;
        background: linear-gradient(to left, transparent, var(--color-ebony), var(--color-light), var(--color-ebony), transparent);
    }
    &::before {
        content: "";
        width: 25px;
        height: 5px;
        position: absolute;
        left: 32%;
        top: -7px;
        border-radius: 50%;
        box-shadow: 0 0 6px 5px var(--color-light);
    }
`;
export const SignUpForm = styled.form`
    &::before {
        content: "";
        width: 400px;
        height: 125px;
        position: absolute;
        top: 20px;
        left: -5px;
        transform: rotate(75deg);
        background: linear-gradient(50deg, rgba(245, 245, 245, 0.15), rgba(0,0,0,0));
        pointer-events: none;
    }
`;
export const SignUpTitle = styled.h2`
    // font-family: ;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin: 10px 10px 20px;
    text-align: center;
    font-size: 2rem;
`;