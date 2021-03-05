import React from 'react';

import FormInput from '../form-input/form-input.component';
import Btn from '../button/button.component';

import { FooterContainer, FooterSubscribeFormContainer, SubscribeForm, FormInputContainer, SubscribeFormTitle, SubscribeFormSubitle, HorizontalLine, MenuItemLink, ItemsContainer, SocialMediaIcon, VisitUs } from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <FooterSubscribeFormContainer>
            <SubscribeFormTitle>Sweet Deals & 10% Off</SubscribeFormTitle>
            <SubscribeFormSubitle>Subscribe to Receive Sweet Deals and Treats!</SubscribeFormSubitle>
            <SubscribeForm>
                <FormInputContainer>
                    <FormInput
                        type="text"
                        id="username"
                        name="username"
                        // value={username} required
                        // onChange={handleChange}
                        hide={true}
                        inline={true}
                        placeholder="Username"
                        />
                    <FormInput
                        type="email"
                        id="email"
                        name="email"
                        // value={email} required
                        // onChange={handleChange}
                        hide={true}
                        inline={true}
                        placeholder="Email"
                    />
                </FormInputContainer>
                <Btn type="submit" fullWidth>Subscribe</Btn>
            </SubscribeForm>
        </FooterSubscribeFormContainer>
        <HorizontalLine/>
        <ItemsContainer>
            <MenuItemLink to="/offer">
                offer
            </MenuItemLink>
            <MenuItemLink to="/about-us">
                about us
            </MenuItemLink>
            <MenuItemLink to="/contact">
                contact
            </MenuItemLink>
        </ItemsContainer>
        <ItemsContainer>
            <SocialMediaIcon className="fab fa-facebook-square"></SocialMediaIcon>
            <SocialMediaIcon className="fab fa-instagram-square"></SocialMediaIcon>
        </ItemsContainer>
        <HorizontalLine/>
        <ItemsContainer>
            <VisitUs>visit us</VisitUs>
        </ItemsContainer>
        <ItemsContainer>
            +1 403 477 9000 | pastry.shop@ps.com | 2502 John Laurie Blvd. Calgary, NW, Canada
        </ItemsContainer>
        <ItemsContainer>
            Pick-up by appointment only at our Kitchen. | Mon-Thu. 8-5:00, Fri. 8-4:30, Sat. 9-4:30, Sun. 10-5:00 
        </ItemsContainer>
        <HorizontalLine/>
        <ItemsContainer>
            Copyright © Tomasz Plewka
        </ItemsContainer>
    </FooterContainer>
);

export default Footer;