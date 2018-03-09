import React from 'preact';
import styled from 'styled-components';
import {
    connect,
} from 'react-redux';


import Share from 'runeBuilder/components/Share';
import PathList from './components/PathList';
import PrimaryPath from './components/PrimaryPath';
import SecondaryPath from './components/SecondaryPath';


const Block = styled('div')`
    overflow: hidden;
    margin: 0 -20px;
    padding: 12px;
    border-bottom: 1px solid #4d3d1c;
    background: #000;
`;


const Mobile = (props) => {
    const {
        paths,
        primary,
        secondary,
    } = props;

    return (
        <Block>
            <PathList paths={paths} primary={primary} />
            <PrimaryPath primary={primary} />
            <SecondaryPath paths={paths} primary={primary} secondary={secondary} />
            <Share />
        </Block>
    );
};


const mapStateToProps = state => ({
    paths: state.paths,
    primary: state.primary,
    secondary: state.secondary,
});


export default connect(mapStateToProps)(Mobile);
