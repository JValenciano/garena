import React from 'react';
import styled from 'styled-components';

import * as Description from 'runeBuilder/components/Description';
import TruncatedText from 'runeBuilder/components/TruncatedText';
import PerkButtonWithTooltip from '../PerkButtonWithTooltip';
import Drawer from '../Drawer';


export const Block = styled('div')`
    display: flex;
    margin-bottom: -1px;
`;

export const LeftSide = styled('div')`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -30px;
    width: 107px;
    height: 100px;
    position: relative;
`;

export const RightSide = styled('div')`
    flex-grow: 1;
    position: relative;
    height: 100px;
    width: 198px;
`;

export const Button = styled('button')`
    display: block;
    padding: 0;
    width: 48px;
    height: 48px;
    border: 0;
    background: #1e2328;
    border-radius: 50%;
    box-shadow: inset 0 0 7px #000, 0 0 1px #000;
    position: relative;

    ${props => props.large && `
        width: 62px;
        height: 62px;
    `}
`;

export const DisabledButton = Button.withComponent('div');

export const Frame = styled('svg')`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const Icon = styled('img')`
    margin: 0;
    width: ${props => (props.keystone ? '108px' : '46px')};
    height: ${props => (props.keystone ? '108px' : '46px')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const KeystoneFlourish = styled('svg')`
    position: absolute;
    right: 0;
    width: 286px;
    height: 9px;

    ${props => props.top && `
        top: 0;
    `}

    ${props => props.bottom && `
        bottom: 0;
        transform: scale(1, -1);
    `}
`;


const Slot = (props) => {
    const {
        slot,
        path,
        slotIndex,
        selectTitle,
        selectText,
        keystone,
    } = props;

    const {
        choice,
    } = slot;

    const currentRune = slot.runes[choice] || false;

    const columns = slot.runes.length > 4 ? 3 : slot.runes.length;

    const toggleDrawer = () => {
        props.toggleDrawer(slotIndex);
    };

    return (
        <Block>
            <LeftSide>
                <PerkButtonWithTooltip
                    rune={currentRune}
                    path={path}
                    isActive={slot.isOpen}
                    disabled={props.disabled}
                    onClick={toggleDrawer}
                    size={keystone && 'large'}
                    keystone={keystone}
                />
            </LeftSide>
            <RightSide>

                {keystone && (
                    <KeystoneFlourish top xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 9">

                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop
                                offset="0%"
                                stopColor={path.colors.gradient.bottom}
                                stopOpacity="0"
                            />
                            <stop
                                offset="50%"
                                stopColor={path.colors.gradient.top}
                                stopOpacity="1"
                            />
                            <stop
                                offset="100%"
                                stopColor={path.colors.gradient.bottom}
                                stopOpacity="0"
                            />
                        </linearGradient>

                        <path fill="none" stroke="url('#grad1')" d="M0 4.5h193l4 4" />
                        <path fill="none" stroke="url('#grad1')" d="M286 8.5H62l-7-8H20l-4 4" />
                    </KeystoneFlourish>
                )}

                {keystone && (
                    <KeystoneFlourish bottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 9">
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor={path.colors.gradient.top} />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>

                        <path fill="none" stroke="url('#grad1')" d="M0 4.5h193l4 4" />
                        <path fill="none" stroke="url('#grad1')" d="M286 8.5H62l-7-8H20l-4 4" />
                    </KeystoneFlourish>
                )}

                {!slot.isOpen && (
                    <div>
                        {currentRune ? (
                            <Description.Block key={currentRune.name} animate>
                                <Description.Title color={path.colors.title}>
                                    {currentRune.name}
                                </Description.Title>
                                <TruncatedText>
                                    <Description.P dangerouslySetInnerHTML={{
                                        __html: currentRune.shortDescription,
                                    }}
                                    />
                                </TruncatedText>
                            </Description.Block>
                        ) : (
                            <Description.Block key="choose-perk">
                                <Description.Title small>
                                    {selectTitle || ''}
                                </Description.Title>
                                <TruncatedText>
                                    <Description.P>
                                        {selectText || window.i18n.runebuilder.selectRune}
                                    </Description.P>
                                </TruncatedText>
                            </Description.Block>
                        )}
                    </div>
                )}

                <Drawer path={path} isOpen={slot.isOpen} columns={columns} keystone={keystone}>
                    {slot.runes.map((rune, runeIndex) => {
                        const setRuneWithData = () => {
                            props.setRune(slotIndex, runeIndex);
                        };

                        const isChosen = slot.choice !== -1 && slot.choice !== runeIndex;

                        return (
                            <PerkButtonWithTooltip
                                key={rune.name}
                                rune={rune}
                                path={path}
                                keystone={keystone}
                                onClick={setRuneWithData}
                                isChosen={isChosen}
                            />
                        );
                    })}
                </Drawer>

            </RightSide>
        </Block>
    );
};


export default Slot;
