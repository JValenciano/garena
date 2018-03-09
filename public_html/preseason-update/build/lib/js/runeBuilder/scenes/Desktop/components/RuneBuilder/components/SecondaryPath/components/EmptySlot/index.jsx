import React from 'react';


import PerkButton from 'runeBuilder/components/PerkButton';
import * as Description from 'runeBuilder/components/Description';
import * as Slot from '../../../Slot';


const EmptySlot = () => (
    <Slot.Block>
        <Slot.LeftSide>
            <PerkButton isDisabled />
        </Slot.LeftSide>
        <Slot.RightSide>
            <Description.Block>
                <Description.Title small>
                    {window.i18n.runebuilder.splash.title}
                </Description.Title>
                <Description.P small>
                    {window.i18n.runebuilder.splash.body}
                </Description.P>
            </Description.Block>
        </Slot.RightSide>
    </Slot.Block>
);


export default EmptySlot;
