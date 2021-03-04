import React from 'react';

import ShapeDividerBottom from '../shape-divider-bottom/shape-divider-bottom.components';

import { TestimonialsContainer, TestimonialsTitle, TestimonialsContentContainer, TestimonialQuote, TestimonialText, TestimonialName, TestimonialProfession, TestimonialsWrapper } from './testimonials.styles';

const Testimonials = () => (
    <TestimonialsContainer>
        <TestimonialsTitle>We care about our clients</TestimonialsTitle>
        {/* Just a placeholder -- in real life, testimonials would be read from db and only then mapped here */}
        <TestimonialsWrapper>
            <TestimonialsContentContainer>
                <TestimonialQuote className="fas fa-quote-left" ></TestimonialQuote>
                <TestimonialText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus obcaecati quisquam itaque facere officia delectus vel a, fugiat deleniti excepturi.</TestimonialText>
                <TestimonialName>John Smith</TestimonialName>
                <TestimonialProfession>Lawyer</TestimonialProfession>
            </TestimonialsContentContainer>
            <TestimonialsContentContainer>
                <TestimonialQuote className="fas fa-quote-left" ></TestimonialQuote>
                <TestimonialText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus obcaecati quisquam itaque facere officia delectus vel a, fugiat deleniti excepturi.</TestimonialText>
                <TestimonialName>John Smith</TestimonialName>
                <TestimonialProfession>Lawyer</TestimonialProfession>
            </TestimonialsContentContainer>
            <TestimonialsContentContainer>
                <TestimonialQuote className="fas fa-quote-left" ></TestimonialQuote>
                <TestimonialText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus obcaecati quisquam itaque facere officia delectus vel a, fugiat deleniti excepturi.</TestimonialText>
                <TestimonialName>John Smith</TestimonialName>
                <TestimonialProfession>Lawyer</TestimonialProfession>
            </TestimonialsContentContainer>
        </TestimonialsWrapper>
        <ShapeDividerBottom color="dark" />
    </TestimonialsContainer>
);

export default Testimonials;