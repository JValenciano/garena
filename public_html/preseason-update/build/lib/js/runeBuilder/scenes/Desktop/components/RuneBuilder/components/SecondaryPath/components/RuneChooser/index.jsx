import React from 'react';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import PerkButtonWithTooltip from '../../../PerkButtonWithTooltip';
import * as Slot from '../../../Slot';
import RuneSlot from './components/RuneSlot';
import RuneDrawer from './components/RuneDrawer';


const toggleSecondaryRuneDrawer0 = () => {
    pathsAPI.toggleSecondaryRuneDrawer(0);
};

const toggleSecondaryRuneDrawer1 = () => {
    pathsAPI.toggleSecondaryRuneDrawer(1);
};


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

        const rune1 = runes[choices[0]];
        const rune2 = runes[choices[1]];

        return (
            <div>
                <Slot.Block>
                    <Slot.LeftSide>
                        <PerkButtonWithTooltip
                            rune={rune1}
                            path={secondary}
                            isActive={isOpen && slotIndex === 0}
                            onClick={toggleSecondaryRuneDrawer0}
                        />
                    </Slot.LeftSide>
                    <Slot.RightSide>
                        <RuneDrawer key={secondary.name} path={secondary} isOpen={isOpen} />
                        {!isOpen && <RuneSlot rune={rune1} path={secondary} />}
                    </Slot.RightSide>
                </Slot.Block>

                <Slot.Block>
                    <Slot.LeftSide>
                        <PerkButtonWithTooltip
                            rune={rune2}
                            path={secondary}
                            isActive={isOpen && slotIndex === 1}
                            onClick={toggleSecondaryRuneDrawer1}
                        />
                    </Slot.LeftSide>

                    <Slot.RightSide>
                        {!isOpen && <RuneSlot rune={rune2} path={secondary} />}
                    </Slot.RightSide>

                </Slot.Block>
            </div>
        );
    }
}
