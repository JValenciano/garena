import React from 'react';
import styled from 'styled-components';


const SVG = styled('svg')`
    position: absolute;
    top: 100%;
    left: 100%;
`;


export default class SVGGradients extends React.Component {
    render() {
        const {
            paths,
        } = this.props;

        const pathsData = Object.keys(paths).map(key => paths[key]);

        return (
            <SVG class="perks-svg-gradients" width="0" height="0">
                <linearGradient id="gradient-white-transparent" x1="0" y1="0" x2="0" y2="1">
                    <stop stopOpacity="1" stopColor="#fff" offset="0%" />
                    <stop stopOpacity="0" stopColor="#fff" offset="100%" />
                </linearGradient>
                <linearGradient id="gradient-yuma-dallasLight" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#cdbe91" offset="0%" />
                    <stop stopColor="#785a28" offset="100%" />
                </linearGradient>
                {pathsData.map(path => (
                    <linearGradient key={path.name} id={`gradient-${path.slug}`} x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor={path.colors.gradient.top} offset="0%" />
                        <stop stopColor={path.colors.gradient.bottom} offset="100%" />
                    </linearGradient>
                ))}
            </SVG>
        );
    }
}
