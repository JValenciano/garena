import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';


import {
    loadImage,
} from 'runeBuilder/helpers';


import PreloadedImage from 'runeBuilder/components/PreloadedImage';


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Block = styled('div')`
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    pointer-events: none;
    user-select: none;
    will-change: transform;
    transition: 0.3s;

    ${props => props.isLoaded && `
        opacity: 1;
    `}

    &::after {
        content: '';
        display: block;
        width: 1055px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, rgba(1,10,19,0.3) 0%, rgba(1,10,19,0.3) 55%, transparent 100%);
    }
`;


const Environment = styled('img')`
    margin: 0;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
`;

const Splash = styled(PreloadedImage)`
    display: block;
    margin: 0;
    position: absolute;
    bottom: 0;
    right: -107px;
    z-index: 1;
`;

const Construct = styled('img')`
    margin: 0;
    display: block;
    position: absolute;
    bottom: 0;
    right: -107px;
    z-index: 2;
`;

const Keystone = styled(PreloadedImage)`
    margin: 0;
    display: block;
    position: absolute;
    bottom: 30px;
    right: -55px;
    z-index: 3;
    animation: ${fadeIn} 0.25s ease forwards;
`;


export default class Backdrop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        };
    }

    componentDidMount() {
        const {
            primary,
        } = this.props;

        const preload = [
            loadImage(`${primary.construct}/environment.png`),
            loadImage(`${primary.construct}/construct.png`),
        ];

        Promise.all(preload)
            .then(() => {
                this.setState({
                    isLoaded: true,
                });
            });
    }

    render() {
        const {
            primary,
            secondary,
        } = this.props;

        const keystoneChoice = primary.slots[0].choice;
        const keystone = keystoneChoice !== -1 && primary.slots[0].runes[keystoneChoice];

        return (
            <Block isLoaded={this.state.isLoaded}>
                <Environment src={`${primary.construct}/environment.png`} alt="" width="1162" height="720" />
                {secondary.id && <Splash key={`splash-${secondary.id}`} src={`${primary.construct}/second/${secondary.id}.png`} alt="" width="700" height="670" />}
                <Construct src={`${primary.construct}/construct.png`} alt="" width="700" height="720" />
                {keystone && <Keystone key={`keystone-${keystoneChoice}`} src={`${primary.construct}/keystones/${keystone.runeId}.png`} alt="" width="600" height="670" />}
            </Block>
        );
    }
}
