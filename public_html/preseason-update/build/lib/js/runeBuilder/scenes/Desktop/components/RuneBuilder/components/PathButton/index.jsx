import React from 'react';
import styled from 'styled-components';


import * as Slot from '../Slot';


const Button = styled(Slot.Button)`
    background: none;
    border: 0;
    box-shadow: none;
    position: relative;
`;

const Icon = styled(Slot.Icon)`
    width: 36px;
    height: 36px;
`;

const Circles = styled('svg')`
    margin: ${-64 / 2}px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
`;

const Circle1 = styled('circle')`
    cx: 50%;
    cy: 50%;
    r: 43%;
    fill: none;
    stroke-width: 2;
    transform: translateY(6%);
    transform-origin: 50% 50%;
`;

const Circle2 = styled(Circle1)`
    transform: rotate(120deg) translateY(6%);
`;

const Circle3 = styled(Circle1)`
    transform: rotate(240deg) translateY(6%);
`;

const Cup = styled('svg')`
    overflow: visible;
    width: 86px;
    height: 86px;
    position: absolute;
    left: -19px;
    bottom: -19px;
`;


const PerkButton = ({ path, rings, ...props }) => {
    const color = path.colors !== undefined ? path.colors.gradient.top : '#cdbe91';
    const circlesId = `circle-gradient-${path.slug || 'default'}`;
    const cupId = `cup-gradient-${path.slug || 'default'}`;
    console.log(path.slug);
    return (
        <Button {...props}>
            {rings !== false && (
                <Circles>
                    <linearGradient id={circlesId} x1="1" y1="0.6" x2="0" y2="0">
                        <stop stopOpacity="1" offset="0%" stopColor={color} />
                        <stop stopOpacity="0" offset="70%" stopColor={color} />
                    </linearGradient>
                    <Circle1 cx="50%" cy="50%" r="43%" fill="none" strokeWidth="2" stroke={`url(#${circlesId})`} />
                    <Circle2 cx="50%" cy="50%" r="43%" fill="none" strokeWidth="2" stroke={`url(#${circlesId})`} />
                    <Circle3 cx="50%" cy="50%" r="43%" fill="none" strokeWidth="2" stroke={`url(#${circlesId})`} />
                </Circles>
            )}
            {rings !== false && (
                <Cup>
                    <linearGradient id={cupId} x1="0" y1="0" x2="0" y2="1">
                        <stop stopOpacity="0" offset="80%" stopColor={color} />
                        <stop stopOpacity="1" offset="100%" stopColor={color} />
                    </linearGradient>
                    <circle cx="42" cy="42" r="42" fill="none" strokeWidth="2" stroke={`url(#${cupId})`} />
                </Cup>
            )}
            {path.slug && <Icon src={path.icon} alt="" />}
        </Button>
    );
};


export default PerkButton;
