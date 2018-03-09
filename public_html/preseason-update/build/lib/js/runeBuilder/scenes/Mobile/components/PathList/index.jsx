import React from 'react';
import styled from 'styled-components';


import * as pathsAPI from 'runeBuilder/services/api/paths';


const Block = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, #010a13 0%, #030e14 100%);
`;


const Path = styled('button')`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    padding: 10px 5px;
    background: #010a13;
    border: 1px solid #9c9789;
    text-align: center;
    position: relative;
    z-index: 2;

    &::after {
        content: '';
        opacity: ${props => props.isActive ? '1' : '0'};
        display: block;
        border: 2px solid #c89b3c;
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        left: -1px;
        transition: 0.2s;
    }
`;

const Icon = styled('img')`
    display: block;
    margin: auto;
    max-width: 100%;
    height: auto;
`;

const Title = styled('h3')`
    margin: 0 0 5px;
    font-size: 7px;
    line-height: 1;
    text-transform: uppercase;
`;


export default class PathList extends React.Component {
    componentDidMount() {
        const pathsData = Object.keys(this.props.paths).map(key => this.props.paths[key]);

        if (this.props.primary === false) {
            pathsAPI.setPrimary(pathsData[0].slug);
        }
    }

    render() {
        const pathsData = Object.keys(this.props.paths).map(key => this.props.paths[key]);

        return (
            <Block>
                {pathsData.map((path) => {
                    const setPrimary = () => {
                        pathsAPI.setPrimary(path.slug);
                    };

                    return (
                        <Path key={path.slug} isActive={path.slug === this.props.primary.slug} onClick={setPrimary}>
                            <Icon src={path.icon} alt=""/>
                            <Title>{path.title}</Title>
                        </Path>
                    );
                })}
            </Block>
        );
    }
}
