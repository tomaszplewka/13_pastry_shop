import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
    padding: 4rem 2rem;
    background-color: var(--color-apricot);
    background: radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(241,187,135,1) 40%);
    position: relative;
    `;
export const TestimonialsTitle = styled.h3`
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    margin: 1rem;
    `;
export const TestimonialsContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    background-color: var(--color-yellow);
    clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
    `;
export const TestimonialQuote = styled.svg`
    text-align: center;
    padding: .5rem;
    font-size: 3rem;
    color: var(--color-dark);
    `;
export const TestimonialText = styled.p`
    text-align: center;
    font-size: 1.1rem;
    color: var(--color-dark);
    `;
export const TestimonialName = styled.span`
    margin: .5rem;
    font-size: 1.25rem;
    color: var(--color-dark);
    font-weight: bolder;
    `;
export const TestimonialProfession = styled.span`
    font-size: 1rem;
    margin: .25rem;
    color: var(--color-dark);
    font-weight: lighter;
    `;
export const TestimonialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0 10px 10px rgba(93, 103, 91, .75));
`;