import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';


import Path from './components/Path';

const glow = keyframes`
    0% {
        filter: brightness(100%);
    }
    50% {
        filter: brightness(170%);
    }
    100% {
        filter: brightness(100%);
    }
`;


export const Paths = styled('div')`
    display: flex;
    align-items: stretch;
    height: 100%;
    background: #010a13;

    & > * {
        animation: ${glow} 2s ease infinite;

        &:nth-child(2) {
            animation-delay: 0.4s;
        }
        &:nth-child(3) {
            animation-delay: 0.8s;
        }
        &:nth-child(4) {
            animation-delay: 1.2s;
        }
        &:nth-child(5) {
            animation-delay: 1.6s;
        }
    }

    &:hover > * {
        animation: none;
    }
`;


const PathList = (props) => {
    const pathsData = Object.keys(props.paths).map(key => props.paths[key]);

    return (
        <Paths>
            {pathsData.map(path => <Path key={path.name} path={path} />)}
        </Paths>
    );
};


export default PathList;
