import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';


import {
    loadImage,
} from 'runeBuilder/helpers';


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


const PreloadedImage = styled('img')`
    animation: ${fadeIn} 0.25s ease forwards;
`;


export default class Img extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoaded: false,
        };
    }

    componentDidMount() {
        loadImage(this.props.src)
            .then(() => {
                this.setState({
                    isLoaded: true,
                });
            })
            .catch(() => {
                console.log('no image');
            });
    }

    shouldComponentUpdate(nextProps) {
        return this.props.src === nextProps.src;
    }

    render() {
        if (!this.state.isLoaded) { return null; }

        return <PreloadedImage {...this.props} />;
    }
}
