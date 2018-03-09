import React from 'react';
import styled from 'styled-components';
import {
    Power0,
    TimelineLite,
} from 'gsap';


import Flourish from 'runeBuilder/components/Flourish';


const Block = styled('div')`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    will-change: transform;
`;

const Slide = styled('div')`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 5;
`;

const Row = styled('div')`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
`;

const RowItem = styled('div')`
    flex: 0 0 auto;
    display: flex;
    justify-content: center;

    ${props => props.columns && `
        width: ${100 / props.columns}%;
    `}
`;

const BlurHolder = styled('div')`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    pointer-events: none;
    filter: blur(10px);
`;

const Blur = styled('div')`
    overflow: hidden;
    height: 100%;
    position: relative;
`;

const BlurInner = styled('div')`
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse closest-side at center, #ffdc7c 0%, rgba(255,220,124,0) 100%);
    position: absolute;
    left: -100%;
`;


export default class Drawer extends React.Component {
    componentDidMount() {
        this.timing = 0.12;

        this.animation = new TimelineLite({
            paused: !this.props.isOpen,
        })
            .set(this.blurHolder, {
                zIndex: 10,
            })
            .set(this.row.childNodes, {
                opacity: 0,
                x: -20,
            })
            .to(this.block, this.timing, {
                opacity: 1,
                visibility: 'visible',
                ease: Power0.easeNone,
            }, 0.05)
            .to([
                this.flourishTop,
                this.flourishBottom,
            ], (this.timing / 2), {
                    color: '#c8aa6e',
                    ease: Power0.easeNone,
                })
            .to([
                this.flourishTop,
                this.flourishBottom,
            ], (this.timing / 2), {
                    color: '#594620',
                    ease: Power0.easeNone,
                })
            .to(this.blur, this.timing, {
                x: '200%',
                ease: Power0.easeNone,
            }, `-=${this.timing}`)
            .to([
                this.flourishTop,
                this.flourishBottom,
            ], this.timing, {
                width: '100%',
                ease: Power0.easeNone,
            }, `-=${this.timing}`)
            .to([
                this.flourishTop,
                this.flourishBottom,
            ], this.timing, {
                width: '100%',
                ease: Power0.easeNone,
            }, `-=${this.timing}`)
            .staggerTo(this.row.childNodes, 0.125, {
                opacity: 1,
                x: 0,
                ease: Power0.easeNone,
            }, (0.2 / this.row.childNodes.length), `-=${this.timing}`)
            .set(this.blurHolder, {
                zIndex: 0,
            });
    }

    componentDidUpdate(prevProps) {
        // Animate open the drawer if it wasn't open but is now.
        if (this.props.isOpen && !prevProps.isOpen) {
            window.requestAnimationFrame(() => {
                this.animation.play();
            });
        }

        // Animate close the drawer if it was open but isn't now.
        if (!this.props.isOpen && prevProps.isOpen) {
            window.requestAnimationFrame(() => {
                this.animation.reverse();
            });
        }
    }

    componentWillUnmount() {
        this.animation.seek(0);
        this.animation.kill();
        this.animation = null;
    }

    render() {
        const {
            columns,
            keystone,
        } = this.props;

        return (
            <Block innerRef={(node) => { this.block = node; }}>

                <BlurHolder innerRef={(node) => { this.blurHolder = node; }}>
                    <Blur>
                        <BlurInner innerRef={(node) => { this.blur = node; }} />
                    </Blur>
                </BlurHolder>

                {!keystone && (
                    <Flourish
                        innerRef={(node) => { this.flourishTop = node; }}
                        top={0}
                    />
                )}
                {!keystone && (
                    <Flourish
                        innerRef={(node) => { this.flourishBottom = node; }}
                        bottom={0}
                    />
                )}

                <Slide innerRef={(node) => { this.slide = node; }}>
                    <Row innerRef={(node) => { this.row = node; }}>
                        {React.Children.map(this.props.children, child => (
                            <RowItem columns={columns}>
                                {child}
                            </RowItem>
                        ))}
                    </Row>
                </Slide>
            </Block>
        );
    }
}
