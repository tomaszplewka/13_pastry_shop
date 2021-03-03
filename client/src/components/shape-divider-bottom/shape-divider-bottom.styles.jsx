import styled from 'styled-components';

export const ShapeDividerBottomContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
`;
export const ShapeDividerBottomSvg = styled.svg`
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 75px;
`;
export const ShapeFillBottom = styled.path`
    fill: ${props => `var(--color-${props.color})`};
`;