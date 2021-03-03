import styled from 'styled-components';

export const HeaderSocialContainer = styled.div`
    padding: 0.75rem;
    background: #010110;
`;
export const HeaderSocialList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    `;
export const HeaderSocialListItem = styled.li`
    list-style: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 .5rem;
`;
export const HeaderSocialIcon = styled.svg`
    font-size: 1.25rem;
    color: #F7EF99;
    margin-right: .5rem;
`;
export const HeaderSocialText = styled.span`
    font-size: .9rem;
    color: #f5f5f5;
    line-height: 1.25rem;
`;
export const HeaderSocialLink = styled.a`
    text-decoration: none;
    color: #f5f5f5;
    display: flex;
`;