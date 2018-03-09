import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';


const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;


const SVG = styled('svg')`
    width: 100%;
    height: 100%;
    opacity: ${props => (props.isActive ? '1' : '0')};
    visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 0.2s;
    filter: blur(1px);
    animation: ${spin} 2s linear forwards infinite;
`;


const Spinner = ({ keystone, isActive }) => (
    <SVG isActive={isActive}>
        <path
            fill="none"
            strokeLinecap="round"
            strokeWidth="2px"
            stroke="url(#gradient-white-transparent)"
            // We need a different svg path depending on if it's a keysone or
            // not.
            d={keystone ? 'M 31 1 A 30 30 0 0 0 31 61' : 'M 23.5 1 A 22.5 22.5 0 0 0 23.5 46'}
        />
        <ellipse cx="50%" cy="1px" fill="#fff" rx="5" ry="2" />
    </SVG>
);


export default Spinner;
