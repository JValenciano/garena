// import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';


const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: none;
    }
`;


export const Block = styled('div')`
    display: flex;
    margin: 0;
    padding: 6px 0;
    position: relative;
    animation: ${slideIn} 0.3s ease forwards;
`;


export const LeftSide = styled('div')`
    flex: 0 0 auto;
    width: 62px;
`;

export const RightSide = styled('div')`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${slideIn} 0.3s ease forwards;
`;
