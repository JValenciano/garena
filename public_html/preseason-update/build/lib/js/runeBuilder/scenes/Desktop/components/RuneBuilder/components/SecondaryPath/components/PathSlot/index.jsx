import React from 'react';
import styled from 'styled-components';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import ToolTip from 'runeBuilder/components/ToolTip';
import * as Description from 'runeBuilder/components/Description';
import * as Slot from '../../../Slot';
import Progress from '../../../Progress';
import Drawer from '../../../Drawer';
import PathButton from '../../../PathButton';


const PathOptionButton = styled('button')`
    width: 48px;
    height: 48px;
    background: none;
    border: 0;
    padding: 0;
`;

const PathIcon = styled('img')`
    display: block;
    margin: 0 auto;
    width: 26px;
    height: 26px;
`;

const Hr = styled('hr')`
    margin: 6px 0;
    width: 100%;
    border: 0;
    background: #515250;
    height: 1px;
`;


const ToolTipContent = ({ setBonus }) => (
    <div>
        <Description.Title small>{setBonus.name}</Description.Title>
        <Description.P flush>{setBonus.name}</Description.P>
        <Hr />
        <Description.P
            dangerouslySetInnerHTML={{
                __html: setBonus.value,
            }}
        />
    </div>
);


export default class PathSlot extends React.Component {
    componentDidUpdate() {
        const {
            primary,
            secondary,
        } = this.props;

        if (!secondary.isOpen && !secondary.hasPath) {
            const remainingPrimaryChoices = primary.slots
                .filter(rune => rune.choice === -1).length;

            if (remainingPrimaryChoices === 0) {
                pathsAPI.toggleSecondaryPathDrawer();
            }
        }
    }

    render() {
        const {
            paths,
            primary,
            secondary,
        } = this.props;

        const remainingPaths = Object.values(paths).filter(path => path.name !== primary.name);

        const total = 2;
        const isActive = secondary.slots.choices && secondary.slots.choices[1] === -1;
        const current = secondary.slots.choices && (secondary.slots.choices[0] !== -1 ? 2 : 1);

        return (
            <Slot.Block>
                <Slot.LeftSide>

                    <Progress
                        path={secondary}
                        total={total}
                        current={current}
                        isActive={isActive}
                    />

                    <PathButton path={secondary} onClick={pathsAPI.toggleSecondaryPathDrawer} />

                </Slot.LeftSide>
                <Slot.RightSide>

                    {!secondary.isOpen && (
                        <div>
                            {secondary.icon ? (() => {
                                const setBonus = primary.bonuses
                                    .find(bonus => bonus.name.indexOf(secondary.name) !== -1);

                                return (
                                    <Description.Block key={setBonus.title} animate>
                                        <Description.Title color={secondary.colors.title} small>
                                            {secondary.name}
                                        </Description.Title>
                                        <Description.P
                                            dangerouslySetInnerHTML={{
                                                __html: setBonus.value,
                                            }}
                                        />
                                    </Description.Block>
                                );
                            })() : (
                                <Description.Block key="choose-path">
                                    <Description.Title small>
                                        {window.i18n.runebuilder.secondary.selectSecondary}
                                    </Description.Title>
                                </Description.Block>
                            )}
                        </div>
                    )}

                    <Drawer isOpen={secondary.isOpen} columns={4}>
                        {remainingPaths.map((choice) => {
                            const setBonus = primary.bonuses
                                .find(bonus => bonus.name.indexOf(choice.name) !== -1);

                            if (setBonus === undefined) {
                                console.warn(`PathSlot couldn't find a setBouns for ${choice.name} in ${primary.name}`);
                                return null;
                            }

                            const setSecondary = () => {
                                pathsAPI.setSecondary(choice.slug);
                            };

                            return (
                                <ToolTip key={choice.name} content={setBonus && <ToolTipContent setBonus={setBonus} />}>
                                    <PathOptionButton onClick={setSecondary}>
                                        <PathIcon src={choice.icon} alt="" />
                                    </PathOptionButton>
                                </ToolTip>
                            );
                        })}
                    </Drawer>
                </Slot.RightSide>
            </Slot.Block>
        );
    }
}
