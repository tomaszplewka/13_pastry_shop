import styled from 'styled-components';

export const ShapeDividerTopContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
`;
export const ShapeDividerTopSvg = styled.svg`
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 75px;
`;
export const ShapeFillTop = styled.path`
    fill: ${props => `var(--color-${props.color})`};
`;