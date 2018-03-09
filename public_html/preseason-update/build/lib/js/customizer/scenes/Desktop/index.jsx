import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';

import Listing from './components/Listing';
import Viewer from './components/Viewer';


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Block = styled('div')`
    padding: 0 2px;
    border: solid;
    border-width: 2px 0;
    border-color: #ab8f57 transparent #6c5021;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 80px #000;
    position: relative;
    z-index: 0;
    animation: ${fadeIn} 0.75s ease forwards;

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


export default class Desktop extends React.Component {
    render() {
        switch (this.props.current) {
            case -1:
                return (
                    <Block>
                        <Listing {...this.props} />
                    </Block>
                );
            default:
                return (
                    <Block>
                        <Viewer {...this.props} />
                    </Block>
                );
        }
    }
}
