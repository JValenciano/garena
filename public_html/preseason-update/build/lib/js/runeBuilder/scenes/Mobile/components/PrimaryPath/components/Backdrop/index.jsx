import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';


const animateIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Block = styled('div')`
    opacity: 0;
    width: ${(370 / 320) * 100}vw;
    position: absolute;
    top: ${(-70 / 320) * 100}vw;
    left: 0;
    z-index: -1;
    transition: 0.3s;

    ${props => props.isLoaded && `
        opacity: 1;
    `}

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: radial-gradient(ellipse closest-side at center, transparent 0%, #000 100%);
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const Environment = styled('img')`
    width: 100%;
    height: auto;
`;

const Construct = styled(Environment)`
    width: ${(700 / 1162) * 100}%;
    position: absolute;
    top: 0;
    right: 0;
`;


export default class Backdrop extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoaded: false,
        };
    }

    componentDidMount() {
        const image = new Image();

        image.onload = () => {
            this.setState({
                isLoaded: true,
            });
        };

        image.src = `${this.props.path.construct}/environment.png`;
    }

    render() {
        const {
            path,
        } = this.props;

        return (
            <Block isLoaded={this.state.isLoaded}>
                <Environment src={`${path.construct}/environment.png`} alt="" />
                <Construct src={`${path.construct}/construct.png`} alt="" />
            </Block>
        );
    }
}
