import React from 'react';
import styled from 'styled-components';
import findIndex from 'lodash/findIndex';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import * as Description from 'runeBuilder/components/Description';
import PathButton from '../PathButton';
import * as Slot from '../Slot';
import RuneChooser from './components/RuneChooser';


const Block = styled('div')`
    position: relative;
    z-index: 1;
`;

const PerkList = styled('div')`
    display: flex;
    align-items: center;
`;

const PerkItem = styled('div')`
    width: 60px;
`;

const SlotBlock = Slot.Block.extend`
    border-top: 1px solid #4d3d1c;
    padding: 16px 0;
`;

const Title = Description.Title.extend`
    margin-bottom: 0;
`;

const P = Description.P.extend`
    margin-bottom: 0;
`;


export default class SecondaryPath extends React.Component {
    componentDidMount() {
        pathsAPI.toggleSecondaryPathDrawer();
    }

    render() {
        const {
            paths,
            primary,
            secondary,
        } = this.props;

        const remainingPrimaryChoices = findIndex(primary.slots, slot => slot.choice === -1);

        if (remainingPrimaryChoices !== -1) { return null; }

        const remainingPaths = Object.values(paths).filter(path => path.name !== primary.name);
        const setBonus = secondary.icon && primary.bonuses
            .find(bonus => bonus.name.indexOf(secondary.name) !== -1);

        return (
            <Block>
                <SlotBlock>
                    <Slot.LeftSide>
                        <PathButton
                            icon={secondary && secondary.icon}
                            path={secondary}
                            onClick={pathsAPI.toggleSecondaryPathDrawer}
                        />
                    </Slot.LeftSide>

                    {!secondary.isOpen && secondary.icon && (
                        <Slot.RightSide>
                            <Description.Title
                                color={secondary.colors.title}
                            >
                                {secondary.name}
                            </Description.Title>
                            <P>{secondary.description}</P>
                            <P
                                dangerouslySetInnerHTML={{
                                    __html: setBonus.value,
                                }}
                            />
                        </Slot.RightSide>
                    )}

                    {!secondary.isOpen && !secondary.icon && (
                        <Slot.RightSide>
                            <Title small>{window.i18n.runebuilder.secondary.selectSecondary}</Title>
                        </Slot.RightSide>
                    )}

                    {secondary.isOpen && (
                        <Slot.RightSide>
                            <PerkList>
                                {remainingPaths.map((choice) => {
                                    const setSecondary = () => {
                                        pathsAPI.setSecondary(choice.slug);
                                    };

                                    return (
                                        <PerkItem key={choice.slug}>
                                            <PathButton
                                                icon={choice.icon}
                                                path={choice}
                                                onClick={setSecondary}
                                            />
                                        </PerkItem>
                                    );
                                })}
                            </PerkList>
                        </Slot.RightSide>
                    )}
                </SlotBlock>

                {secondary.hasPath && <RuneChooser key={secondary.title} secondary={secondary} />}

            </Block>
        );
    }
}
