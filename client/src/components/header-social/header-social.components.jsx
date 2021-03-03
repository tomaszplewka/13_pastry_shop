import React from 'react';

import { HeaderSocialContainer, HeaderSocialList, HeaderSocialListItem, HeaderSocialIcon, HeaderSocialText, HeaderSocialLink } from './header-social.styles';

const HeaderSocial = () => (
    <HeaderSocialContainer>
        <HeaderSocialList>
            <HeaderSocialListItem>
                <HeaderSocialIcon className="fas fa-phone-square-alt"></HeaderSocialIcon>
                <HeaderSocialText>+1 403 477 9000</HeaderSocialText>
            </HeaderSocialListItem>
            <HeaderSocialListItem>
                <HeaderSocialIcon className="fas fa-envelope-square"></HeaderSocialIcon>
                <HeaderSocialText>pastry.shop@ps.com</HeaderSocialText>
            </HeaderSocialListItem>
            <HeaderSocialListItem>
                <HeaderSocialLink href="https://www.facebook.com" rel="noreferrer" target="_blank">
                    <HeaderSocialIcon className="fab fa-facebook-square"></HeaderSocialIcon>
                    <HeaderSocialText>facebook</HeaderSocialText>
                </HeaderSocialLink>
            </HeaderSocialListItem>
            <HeaderSocialListItem>
                <HeaderSocialLink href="https://www.instagram.com" rel="noreferrer" target="_blank">
                    <HeaderSocialIcon className="fab fa-instagram-square"></HeaderSocialIcon>
                    <HeaderSocialText>instagram</HeaderSocialText>
                </HeaderSocialLink>
            </HeaderSocialListItem>
        </HeaderSocialList>
    </HeaderSocialContainer>
);

export default HeaderSocial;