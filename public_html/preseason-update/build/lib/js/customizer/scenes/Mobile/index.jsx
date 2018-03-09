import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';


import Path from './components/Path';


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Block = styled('div')`
    padding: ${(18 / 660) * 100}% ${(18 / 660) * 100}% 0;
    border: solid;
    border-width: 2px 0;
    border-color: #ab8f57 transparent #6c5021;
    animation: ${fadeIn} 0.75s ease forwards;
    position: relative;

    &::before,
    &::after {
        content: '';
        display: block;
        width: 2px;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        background: linear-gradient(0deg, #6c5021 0%, #ab8f57 100%);
    }

    &::before {
        left: 0;
    }

    &::after {
        right: 0;
    }
`;


const Mobile = ({ paths, current, ...props }) => (
    <Block>
        {paths.map((path, pathIndex) => {
            const setCurrent = () => {
                if (pathIndex === current) {
                    props.setCurrent(-1);
                } else {
                    props.setCurrent(pathIndex);
                }
            };

            return (
                <Path
                    key={path.slug}
                    path={path}
                    setCurrent={setCurrent}
                    active={current === pathIndex}
                />
            );
        })}
    </Block>
);


export default Mobile;
