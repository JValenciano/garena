import React from 'react';
import styled from 'styled-components';
import {
    Power0,
    TimelineLite,
} from 'gsap';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import Flourish from 'runeBuilder/components/Flourish';
import PerkButtonWithTooltip from '../../../../../PerkButtonWithTooltip';


const Block = styled('div')`
    opacity: 0;
    visibility: hidden;
    width: 200px;
    height: 220px;
    position: absolute;
    top: -10px;
    left: 0;
    z-index: 100;
`;

const Row = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;

const Item = styled('div')`
    flex-basis: ${100 / 3}%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export default class RuneDrawer extends React.Component {
    componentDidMount() {
        this.timing = 0.12;

        this.animation = new TimelineLite({
            paused: !this.props.isOpen,
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
                }, `-=${this.timing}`)
            .to([
                this.flourishTop,
                this.flourishBottom,
            ], (this.timing / 2), {
                    color: '#594620',
                    ease: Power0.easeNone,
                })
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
            }, (0.2 / this.row.childNodes.length), `-=${this.timing}`);
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
            path,
        } = this.props;

        const {
            runes,
            choices,
        } = path.slots;

        const [
            choice1,
            choice2,
        ] = choices;

        const rune1Group = Math.floor(choice1 / 3);
        const rune2Group = Math.floor(choice2 / 3);

        return (
            <Block innerRef={(node) => { this.block = node; }}>
                <Row innerRef={(node) => { this.row = node; }}>
                    {runes.map((rune, runeIndex) => {
                        const setSecondaryRune = () => {
                            pathsAPI.setSecondaryRune(runeIndex);
                        };

                        const runeGroupNumber = Math.floor(runeIndex / 3);
                        const inRuneGroup1 = runeGroupNumber === rune1Group;
                        const inRuneGroup2 = runeGroupNumber === rune2Group;
                        const runeGroup = inRuneGroup1 || inRuneGroup2;

                        const isChosen = runeGroup && runeIndex !== choice1 && runeIndex !== choice2;

                        return (
                            <Item key={rune.name}>
                                <PerkButtonWithTooltip
                                    rune={rune}
                                    path={path}
                                    onClick={setSecondaryRune}
                                    isChosen={isChosen}
                                />
                            </Item>
                        );
                    })}
                </Row>

                <Flourish
                    innerRef={(node) => { this.flourishTop = node; }}
                    top={72}
                />

                <Flourish
                    innerRef={(node) => { this.flourishBottom = node; }}
                    bottom={72}
                />

            </Block>
        );
    }
}
