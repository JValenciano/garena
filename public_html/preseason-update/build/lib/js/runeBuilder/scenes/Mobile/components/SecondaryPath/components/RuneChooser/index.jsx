import React from 'react';
import styled from 'styled-components';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import PerkButton from 'runeBuilder/components/PerkButton';
import Flourish from 'runeBuilder/components/Flourish';
import * as Description from 'runeBuilder/components/Description';
import * as Slot from '../../../Slot';


const RuneDrawer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    width: 180px;
    height: 180px;
    z-index: 100;
`;

const RuneDrawerItem = styled('div')`
    flex-basis: ${100 / 3}%;
    display: flex;
`;

const SlotBlock = Slot.Block.extend`
    padding: 16px 0;
`;

const Title = Description.Title.extend`
    margin-bottom: 0;
`;

const P = Description.P.extend`
    margin-bottom: 0;
`;


export default class PathSlot extends React.Component {
    render() {
        const {
            secondary,
        } = this.props;

        const {
            runes,
            choices,
            slotIndex,
            isOpen,
        } = secondary.slots;

        const [
            choice1,
            choice2,
        ] = choices;

        const rune1 = runes[choices[0]];
        const rune2 = runes[choices[1]];
        const rune1Group = Math.floor(choice1 / 3);
        const rune2Group = Math.floor(choice2 / 3);

        return (
            <div key={secondary.slug || 'blank'}>
                <SlotBlock>
                    <Flourish top={0} />

                    <Slot.LeftSide>
                        <PerkButton
                            rune={rune1}
                            path={secondary}
                            isActive={isOpen && slotIndex === 0}
                            onClick={pathsAPI.toggleSecondaryRuneDrawer.bind(null, 0)}
                        />
                    </Slot.LeftSide>
                    <Slot.RightSide>
                        {isOpen && slotIndex === 0 ? (
                            <Slot.Block>
                                <RuneDrawer>
                                    {runes.map((rune, runeIndex) => {
                                        const runeGroupNumber = Math.floor(runeIndex / 3);
                                        const inRuneGroup1 = runeGroupNumber === rune1Group;
                                        const inRuneGroup2 = runeGroupNumber === rune2Group;
                                        const runeGroup = inRuneGroup1 || inRuneGroup2;

                                        const isChosen = runeGroup && runeIndex !== choice1 && runeIndex !== choice2;

                                        return (
                                            <RuneDrawerItem key={rune.runeId}>
                                                <PerkButton
                                                    rune={rune}
                                                    path={secondary}
                                                    onClick={pathsAPI.setSecondaryRune.bind(null, runeIndex)}
                                                    isChosen={isChosen}
                                                />
                                            </RuneDrawerItem>
                                        );
                                    })}
                                </RuneDrawer>
                            </Slot.Block>
                        ) : (
                            !rune1 ? (
                                <Title
                                    key="choose-rune1"
                                    small
                                    color={secondary.colors.title}
                                >
                                    Select Secondary
                                </Title>
                            ) : (
                                <div key="rune1">
                                    <Description.Title
                                        small
                                        color={secondary.colors.title}
                                    >
                                        {rune1.name}
                                    </Description.Title>
                                    <P
                                        dangerouslySetInnerHTML={{
                                            __html: rune1.longDescription,
                                        }}
                                    />
                                </div>
                            )
                        )}
                    </Slot.RightSide>
                </SlotBlock>

                <SlotBlock>
                    <Flourish top={0} />

                    <Slot.LeftSide>
                        <PerkButton
                            rune={rune2}
                            path={secondary}
                            isActive={isOpen && slotIndex === 1}
                            onClick={pathsAPI.toggleSecondaryRuneDrawer.bind(null, 1)}
                        />
                    </Slot.LeftSide>

                    <Slot.RightSide>
                        {isOpen && slotIndex === 1 ? (
                            <Slot.Block>
                                <RuneDrawer>
                                    {runes.map((rune, runeIndex) => {
                                        const runeGroupNumber = Math.floor(runeIndex / 3);
                                        const inRuneGroup1 = runeGroupNumber === rune1Group;
                                        const inRuneGroup2 = runeGroupNumber === rune2Group;
                                        const runeGroup = inRuneGroup1 || inRuneGroup2;

                                        const isChosen = runeGroup && runeIndex !== choice1 && runeIndex !== choice2;

                                        return (
                                            <RuneDrawerItem key={rune.runeId}>
                                                <PerkButton
                                                    rune={rune}
                                                    path={secondary}
                                                    onClick={pathsAPI.setSecondaryRune.bind(null, runeIndex)}
                                                    isChosen={isChosen}
                                                />
                                            </RuneDrawerItem>
                                        );
                                    })}
                                </RuneDrawer>
                            </Slot.Block>
                        ) : (
                            !rune2 ? (
                                <Title
                                    key="choose-rune2"
                                    small
                                    color={secondary.colors.title}
                                >
                                    Select Secondary
                                </Title>
                            ) : (
                                <div key="rune2">
                                    <Description.Title
                                        small
                                        color={secondary.colors.title}
                                    >
                                        {rune2.name}
                                    </Description.Title>
                                    <P
                                        dangerouslySetInnerHTML={{
                                            __html: rune2.longDescription,
                                        }}
                                    />
                                </div>
                            )
                        )}
                    </Slot.RightSide>

                </SlotBlock>
            </div>
        );
    }
}
