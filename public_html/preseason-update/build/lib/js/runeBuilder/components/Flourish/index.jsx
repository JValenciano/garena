import React from 'react';
import styled from 'styled-components';


const Block = styled('div')`
    opacity: 0.6;
    color: #594620;
    position: absolute;
    left: 0;
    right: 0;

    ${props => props.animated !== undefined && `
        width: 0;
    `}

    ${props => props.top !== undefined && `
        top: ${props.top}px;
    `}

    ${props => props.bottom !== undefined && `
        bottom: ${props.bottom}px;
    `}
`;

const FlourishBar = styled('div')`
    margin: 0 3px;
    border-top: 1px solid currentColor;
`;

const FlourishCap = styled('div')`
    border: 1px solid currentColor;
    width: 5px;
    height: 5px;
    position: absolute;
    transform: translate(-50%, -50%) rotate(45deg);

    ${props => props.left && `
        left: 0;
    `}

    ${props => props.right && `
        left: 100%;
    `}
`;


const Flourish = props => (
    <Block {...props}>
        <FlourishCap left />
        <FlourishBar />
        <FlourishCap right />
    </Block>
);


export default Flourish;
