import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';
import {
    assetPath,
} from 'helpers';

import Portal from 'react-portal';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


const ToolTipBlock = styled('div')`
    pointer-events: none;
    width: 284px;
    box-shadow: 0 0 0 1px rgba(1,10,19,0.48);
    color: #a09b8c;
    font-size: 12px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: 0.025em;
    position: fixed;
    backface-visibility: hidden;
    z-index: 1000;
    animation: ${fadeIn} 0.5s ease forwards;
`;

const ToolTipContent = styled('div')`
    padding: 20px 20px 1px;
    border: 2px solid #5d471d;
    background: #010a13;
    position: relative;
    z-index: 10;
`;

const ToolTopBar = styled('div')`
    height: 3px;
    background: #010a13;
    border-bottom: 1px solid #5d471d;
    position: absolute;
    top: 100%;
    left: 12px;
    right: 12px;
    z-index: -1;

    &::before,
    &::after {
        content: '';
        background: url("${assetPath('/img/runeBuilder/tooltip-sub-border-horizontal.png')}");
        width: 4px;
        height: 12px;
        position: absolute;
        bottom: 0;
    }

    &::before {
        right: 100%;
    }

    &::after {
        left: 100%;
        transform: scale(-1, 1);
    }
`;

const ToolTipCarot = styled('div')`
    width: 24px;
    height: 15px;
    background: url("${assetPath('/img/runeBuilder/tooltip-caret.png')}");
    position: absolute;
    margin: -4px -12px;
    top: 100%;
    left: 50%;
    transform: translateX(${props => props.leftOffset}px);
`;


class ToolTipPosition extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            top: this.props.top,
            left: this.props.left,
        };
    }

    componentDidMount() {
        const appNode = document.querySelector('#perks-app');

        const rect = this.wrap.getBoundingClientRect();
        const appRect = appNode.getBoundingClientRect();

        const margin = 25;
        const top = this.props.top - rect.height - 15;
        let left = this.props.left - (rect.width / 2);
        let leftOffset = 0;

        const isLeft = left < appRect.left + margin;
        const isRight = (left + rect.width) > (appRect.left + appRect.width) - margin;
        // const isAbove = top < appRect.top;

        if (isLeft) {
            const newLeft = appRect.left + margin;
            leftOffset = left - newLeft;
            left = newLeft;
        }

        if (isRight) {
            const newLeft = ((appRect.left + appRect.width) - rect.width) - margin;
            leftOffset = left - newLeft;
            left = newLeft;
        }

        this.setState({
            top,
            left,
            leftOffset,
        });
    }

    render() {
        const {
            top,
            left,
            leftOffset,
        } = this.state;

        return (
            <ToolTipBlock innerRef={(node) => { this.wrap = node; }} style={{ top, left }}>
                {this.props.children}

                <ToolTopBar>
                    <ToolTipCarot leftOffset={leftOffset} />
                </ToolTopBar>
            </ToolTipBlock>
        );
    }
}


export default class ToolTip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            top: 0,
            left: 0,
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.close);
    }

    componentWillUnmount() {
        this.close();
        window.removeEventListener('scroll', this.close);
    }

    open() {
        const rect = this._portal.getBoundingClientRect();

        this.setState({
            isOpen: true,
            top: rect.top,
            left: rect.left + (rect.width / 2),
        });
    }

    close() {
        this.setState({
            isOpen: false,
        });
    }

    render() {
        const {
            left,
            top,
            isOpen,
        } = this.state;

        if (!this.props.content) {
            return this.props.children;
        }

        return (
            <div
                ref={(ref) => { this._portal = ref; }}
                onMouseEnter={this.open}
                onMouseLeave={this.close}
            >
                {this.props.children}

                <Portal isOpened={isOpen}>
                    <ToolTipPosition top={top} left={left}>
                        <ToolTipContent>
                            {this.props.content}
                        </ToolTipContent>
                    </ToolTipPosition>
                </Portal>
            </div>
        );
    }
}
