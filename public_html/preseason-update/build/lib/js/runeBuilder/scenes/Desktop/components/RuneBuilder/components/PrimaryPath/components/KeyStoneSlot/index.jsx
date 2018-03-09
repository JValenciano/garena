import React from 'react';
import styled from 'styled-components';
import findIndex from 'lodash/findIndex';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import * as Description from 'runeBuilder/components/Description';
import TruncatedText from 'runeBuilder/components/TruncatedText';
import * as Slot from '../../../Slot';
import PathButton from '../../../PathButton';
import Progress from '../../../Progress';


const Title = styled(Description.Title)`
    font-size: 18px;
    line-height: 22px;
`;


const KeyStoneSlot = ({ path }) => {
    const total = path.slots.length;
    const currentSlot = findIndex(path.slots, slot => slot.choice === -1);
    const isActive = currentSlot !== -1;
    const current = currentSlot === -1 ? total : currentSlot + 1;

    return (
        <Slot.Block>
            <Slot.LeftSide>

                <Progress path={path} total={total} current={current} isActive={isActive} />

                <PathButton path={path} onClick={pathsAPI.clearPrimary} />

            </Slot.LeftSide>
            <Slot.RightSide>
                <Description.Block animate={false}>
                    <Title color={path.colors.title}>{path.name}</Title>
                    <TruncatedText>
                        <Description.P dangerouslySetInnerHTML={{ __html: path.description }} />
                    </TruncatedText>
                </Description.Block>
            </Slot.RightSide>
        </Slot.Block>
    );
};


export default KeyStoneSlot;
