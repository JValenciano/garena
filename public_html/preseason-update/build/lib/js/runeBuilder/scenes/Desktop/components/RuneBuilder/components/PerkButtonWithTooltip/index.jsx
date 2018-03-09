import React from 'react';


import PerkButton from 'runeBuilder/components/PerkButton';
import ToolTip from 'runeBuilder/components/ToolTip';
import * as Description from 'runeBuilder/components/Description';
import RuneDescription from 'runeBuilder/components/RuneDescription';


const ToolTipContent = ({ rune }) => (
    <div>
        <Description.Title>{rune.name}</Description.Title>
        <RuneDescription rune={rune} />
    </div>
);


const PerkButtonWithTooltip = ({ rune, ...props }) => (
    <ToolTip content={rune && <ToolTipContent rune={rune} />}>
        <PerkButton rune={rune} {...props} />
    </ToolTip>
);


export default PerkButtonWithTooltip;
