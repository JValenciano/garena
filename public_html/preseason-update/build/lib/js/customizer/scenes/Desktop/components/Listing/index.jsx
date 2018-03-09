import React from 'react';
import styled from 'styled-components';


import {
    assetPath,
} from 'helpers';


const Block = styled('div')`
    padding: 18px;
    position: relative;
    z-index: 1;
`;

const List = styled('ul')`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 -5px;
    height: 700px;
`;

const Path = styled('li')`
    flex: 0 0 auto;
    width: ${100 / 5}%;
    height: 100%;
    padding: 0 5px;
    position: relative;
`;

const Rune = styled('button')`
    overflow: hidden;
    padding: 0;
    width: 100%;
    height: 700px;
    border: 0;
    background: #000;
    color: #b5b4b2;
    font-size: 18px;
    line-height: ${28 / 18}em;
    text-align: center;
    position: relative;
    transition: 0.3s;
    will-change: transform;

    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #31271e;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }

    &::after {
        content: '';
        opacity: 0;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #070d10;
        transition: 0.3s;

        ${Block}:hover & {
            opacity: 0.5;
        }
    }

    &:hover {
        ${Block}:hover &::after {
            opacity: 0;
        }
    }
`;


const SplashWrap = styled('div')`
    overflow: hidden;
    height: 700px;
    position: relative;
    transform: translateY(20%);
    opacity: 0;
    transition: 0.4s ease;

    ${props => props.viewed && `
        transform: none;
        opacity: 1;
    `}

    ${props => `
        transition-delay: ${props.index * 0.05}s;
    `}

    &::after {
        content: '';
        display: block;
        margin: 0 -180px;
        width: 360px;
        height: 100%;
        box-shadow: inset 0 0 110px rgba(0, 0, 0, 0.8);
        position: absolute;
        top: 0;
        left: 50%;
    }
`;


const Splash = styled('img')`
    margin: 0;
    width: 360px;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`;

const Header = styled('header')`
    padding: 0 20px 40px;
    background: #111318;
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    transform: translateY(-80px);
    transition: 0.3s;

    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, #433712 0%, #c5b88a 50%, #433712 100%);
        position: absolute;
        top: 0;
        left: 0;
    }

    ${Rune}:hover & {
        transform: translateY(-100%) translateY(20px);
        transition: 0.3s;
    }
`;

const RuneTitle = styled('h4')`
    margin: 20px 0 0;
    color: #d8cfbd;
    font-size: ${20 / 18}em;
    line-height: 40px;
    text-transform: uppercase;
`;

const RuneBody = styled('div')`
    opacity: 0;
    transform: translateY(20px);
    transition: 0.3s 0.15s;

    ${Rune}:hover & {
        opacity: 1;
        transform: none;
    }
`;


const Listing = ({ paths, viewed, setCurrent }) => (
    <Block>
        <List>
            {paths.map((path, pathIndex) => {
                const handleClick = () => {
                    setCurrent(pathIndex);
                };

                return (
                    <Path key={`path-${path.name}`}>
                        <Rune onClick={handleClick}>
                            <SplashWrap viewed={viewed} index={pathIndex}>
                                <Splash src={assetPath(`/img/customizer/${path.id}/stripe.jpg`)} alt="" />
                            </SplashWrap>

                            <Header>
                                <RuneTitle>{path.name}</RuneTitle>
                                <RuneBody>
                                    {path.description}
                                </RuneBody>
                            </Header>
                        </Rune>
                    </Path>
                );
            })}
        </List>
    </Block>
);


export default Listing;
