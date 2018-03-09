import React from 'react';
import styled from 'styled-components';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import * as Description from 'runeBuilder/components/Description';
import PerkButton from 'runeBuilder/components/PerkButton';
import Flourish from 'runeBuilder/components/Flourish';
import PathButton from '../PathButton';
import * as Slot from '../Slot';
import Backdrop from './components/Backdrop';


const Block = styled('div')`
    padding-top: 40px;
    position: relative;
    z-index: 1;
`;

const SlotBlock = Slot.Block.extend`
    padding: 16px 0;
`;

const P = Description.P.extend`
    margin-bottom: 0;
`;


export default class PrimaryPath extends React.Component {
    render() {
        const {
            primary,
        } = this.props;

        if (!primary) { return null; }

        return (
            <Block>
                <div>
                    <Backdrop path={primary} />

                    <Slot.Block>
                        <Slot.LeftSide>
                            <PathButton icon={primary.icon} path={primary} />
                        </Slot.LeftSide>
                        <Slot.RightSide>
                            <Description.Title color={primary.colors.title}>
                                {primary.name}
                            </Description.Title>
                            <Description.P>{primary.description}</Description.P>
                        </Slot.RightSide>
                    </Slot.Block>


                    {primary.slots.map((slot, slotIndex) => {
                        const slotRune = slot.runes[slot.choice];

                        const togglePrimaryRuneDrawer = () => {
                            pathsAPI.togglePrimaryRuneDrawer(slotIndex);
                        };

                        return (
                            <SlotBlock
                                key={slot.slug}
                            >

                                <Flourish top={0} />

                                <Slot.LeftSide>
                                    <PerkButton
                                        rune={slotRune}
                                        path={primary}
                                        isActive={slot.isOpen}
                                        onClick={togglePrimaryRuneDrawer}
                                    />
                                </Slot.LeftSide>

                                {slot.isOpen ? (
                                    <Slot.RightSide>
                                        {slot.runes.map((rune, runeIndex) => {
                                            const setPrimaryRune = () => {
                                                pathsAPI.setPrimaryRune(slotIndex, runeIndex);
                                            };

                                            const isChosen = slot.choice !== -1 && slot.choice !== runeIndex;

                                            return (
                                                <Slot.Block key={rune.name}>
                                                    <Slot.LeftSide>
                                                        <PerkButton
                                                            rune={rune}
                                                            path={primary}
                                                            small
                                                            onClick={setPrimaryRune}
                                                            isChosen={isChosen}
                                                        />
                                                    </Slot.LeftSide>
                                                    <Slot.RightSide>
                                                        <Description.Title
                                                            color={primary.colors.title}
                                                        >
                                                            {rune.name}
                                                        </Description.Title>
                                                        <P
                                                            dangerouslySetInnerHTML={{
                                                                __html: rune.longDescription,
                                                            }}
                                                        />
                                                    </Slot.RightSide>
                                                </Slot.Block>
                                            );
                                        })}
                                    </Slot.RightSide>
                                ) : (
                                    <Slot.RightSide>
                                        {slotRune ? (
                                            <div>
                                                <Description.Title color={primary.colors.title}>
                                                    {slotRune.name}
                                                </Description.Title>
                                                <P
                                                    dangerouslySetInnerHTML={{
                                                        __html: slotRune.longDescription,
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <P color={primary.colors.title}>
                                                {slotIndex === 0 ? window.i18n.runebuilder.selectKeystone : window.i18n.runebuilder.selectRune}
                                            </P>
                                        )}
                                    </Slot.RightSide>
                                )}

                            </SlotBlock>
                        );
                    })}

                </div>
            </Block>
        );
    }
}
