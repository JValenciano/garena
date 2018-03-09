import React from 'react';
import styled from 'styled-components';
import {
    connect,
} from 'react-redux';

import PathList from './components/PathList';
import RuneBuilder from './components/RuneBuilder';


const AppOuter = styled('div')`
    margin: auto;
    padding: 2px;
    width: 100%;
    max-width: 1061px;
    height: 645px;
    background: linear-gradient(0deg, #6c5021 0%, #ab8f57 100%);
    box-shadow: 0 0 80px #000;
    position: relative;
`;


const AppInner = styled('div')`
    width: 100%;
    height: 100%;
    background: #000;
    font-size: 14px;
    line-height: 1.5;
`;


const Desktop = (props) => {
    const {
        paths,
        primary,
        secondary,
    } = props;

    return (
        <AppOuter>
            <AppInner id="perks-app">
                {!primary ?
                    <PathList paths={paths} />
                    :
                    <RuneBuilder key={primary.id} primary={primary} secondary={secondary} />
                }
            </AppInner>
        </AppOuter>
    );
};


const mapStateToProps = state => ({
    primary: state.primary,
    secondary: state.secondary,
});


export default connect(mapStateToProps)(Desktop);
