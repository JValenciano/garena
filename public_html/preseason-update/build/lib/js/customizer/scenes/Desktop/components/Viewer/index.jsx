import React from 'react';
import styled from 'styled-components';
import {
    assetPath,
} from 'helpers';


import Path from './components/Path';


const Block = styled('div')`
    position: relative;
    z-index: 0;
`;

const List = styled('ul')`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -32px 0 0;
    height: 64px;
    padding: 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`;

const PathItem = styled('li')`
    margin: 0 25px;
    position: relative;
    will-change: transform;
`;

const PathButton = styled('button')`
    width: 64px;
    height: 64px;
    outline: 0;
    border: 0;
    padding: 2px;
    background: linear-gradient(0deg, #72542a 0%, #bd9e5e 100%);
    border-radius: 50%;
    position: relative;
    transition: 0.2s;
    z-index: 1;

    ${props => props.isActive && `
        width: 94px;
        height: 94px;
    `}

    &::after {
        content: '';
        display: block;
        margin: -56px;
        background: url(${assetPath('/img/global/circle.svg')});
        width: 112px;
        height: 112px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(0);
        z-index: -1;

        ${props => props.isActive && `
            transition: 0.2s;
            transform: none;
        `}
    }
`;

const PathButtonInner = styled('span')`
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: inherit;
`;

const PathButtonIcon = styled('img')`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

const PathButtonTitle = styled('div')`
    display: block;
    opacity: 0;
    visibility: hidden;
    width: 400px;
    margin-top: 10px;
    margin-left: -200px;
    position: absolute;
    top: 100%;
    left: 50%;
    transition: 0.3s;

    ${props => props.isActive && `
        opacity: 1;
        visibility: visible;
    `}
`;

const BackButton = styled('button')`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    cursor: pointer;
    padding: 0;
    width: 34px;
    height: 34px;
    max-width: 100%;
    border: 0;
    color: #c7b184;
    fill: currentColor;
    box-shadow: 0 0 28px #000;
    font-family: "Beaufort for LOL", serif;
    font-size: 16px;
    line-height: 1;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 20;
    transition: 0.3s;

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }

    &::before {
        background: linear-gradient(0deg, #72542a 0%, #bd9e5e 100%);
    }

    &::after {
        margin: 1px;
        background: #16181d;
        transition: inherit;
    }

    &:hover {
        color: #fff;
        text-decoration: none;
        box-shadow:
            0 0 28px #000,
            0 0 28px rgba(#000, 0.6);

        &::after {
            background: #1a1d21;
        }
    }
`;

const BackButtonIcon = styled('svg')`
    margin: auto;
    width: 24px;
    height: 24px;
`;


export default class Viewer extends React.Component {
    render() {
        const {
            paths,
            current,
            setCurrent,
        } = this.props;

        const backToListing = () => {
            setCurrent(-1);
        };

        return (
            <Block>
                <List>
                    {paths.map((path, pathIndex) => {
                        const handleClick = () => {
                            setCurrent(pathIndex);
                        };

                        const isActive = pathIndex === current;

                        return (
                            <PathItem key={path.slug}>
                                <PathButton onClick={handleClick} isActive={isActive}>
                                    <PathButtonInner>
                                        <PathButtonIcon src={assetPath(`/img/customizer/${path.id}/thumb.jpg`)} alt="" />
                                        <span className="u-sr-only">
                                            {path.name}
                                        </span>
                                    </PathButtonInner>
                                </PathButton>

                                <PathButtonTitle isActive={isActive}>
                                    <h3 className="c-hero__subtitle c-title-wings is-active u-spacing-30">
                                        <span className="c-title-wings__wing c-title-wings__wing--left" />
                                        <span className="c-title-wings__title">{path.name.toUpperCase()}</span>
                                        <span className="c-title-wings__wing" />
                                    </h3>
                                </PathButtonTitle>
                            </PathItem>
                        );
                    })}
                </List>

                {paths.map((path, pathIndex) => {
                    if (pathIndex !== current) { return null; }

                    return (
                        <Path key={path.name} path={path} />
                    );
                })}

                <BackButton onClick={backToListing}>
                    <BackButtonIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M182 36.9L161.1 16 98.5 78.6 35.9 16 15 36.9l62.6 62.6L15 162.1 35.9
                            183l62.6-62.6 62.6 62.6 20.9-20.9-62.6-62.6"
                        />
                    </BackButtonIcon>
                </BackButton>
            </Block>
        );
    }
}
