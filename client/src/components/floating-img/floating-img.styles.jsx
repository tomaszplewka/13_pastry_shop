import styled from 'styled-components';

export const FloatingImgContainer = styled.div`
    position: absolute;
    top: ${props => props.position.top};
    left: ${props => props.position.left};
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("${props => props.backgroundImg}");
    z-index: -1;
`;