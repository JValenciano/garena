import React from 'react';
import styled from 'styled-components';


import Share from 'runeBuilder/components/Share';
import Reset from 'runeBuilder/components/Reset';
import Backdrop from './components/Backdrop';
import Options from './components/Options';
import PrimaryPath from './components/PrimaryPath';
import SecondaryPath from './components/SecondaryPath';


const PathBlock = styled('div')`
    height: 100%;
    background-color: #010a13;
    position: relative;
    z-index: 1;
`;

const PathBody = styled('div')`
    padding: 30px 0 0 35px;
    display: flex;
    position: relative;
    z-index: 1;
`;

const PathColumn = styled('div')`
    flex: 0 0 auto;
    padding-top: 55px;
    margin-right: 50px;
    width: 275px;
    position: relative;
`;


const RuneBuilder = (props) => {
    const {
        primary,
        secondary,
    } = props;

    return (
        <PathBlock>

            <Backdrop primary={primary} secondary={secondary} />

            <PathBody>
                <PathColumn>
                    <PrimaryPath />
                </PathColumn>

                <PathColumn>
                    <SecondaryPath />
                </PathColumn>

            </PathBody>

            <Options />

            <Share fixed />

            <Reset fixed />

        </PathBlock>
    );
};


export default RuneBuilder;
