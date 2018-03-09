import React from 'react';
import styled from 'styled-components';


import {
    assetPath,
} from 'helpers';

import * as pathsAPI from 'runeBuilder/services/api/paths';


import ToolTip from 'runeBuilder/components/ToolTip';
import * as Description from 'runeBuilder/components/Description';


const Block = styled('div')`
    flex: 0 0 auto;
    width: 20%;
    height: 100%;
    text-align: center;
    position: relative;
`;

const Perk = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 1px rgba(1,10,19,0.85);
    position: relative;
`;

const PerkBackground = styled('img')`
    height: 639px;
    width: 211px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.1s ease-out;

    ${Perk}:hover & {
        filter: brightness(150%);
    }
`;

const PerkButtonOverlay = styled('button')`
    border: 0;
    background: none;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const PathIconWrap = styled('div')`
    position: relative;
    width: 100%;
    height: 246px;
    margin-top: 40px;
    margin-bottom: 46px;
`;

const PathIcon = styled('img')`
    display: block;
    background: url("${assetPath('/img/runeBuilder/assets/ring.png')}") center no-repeat;
    margin: 0;
    opacity: 0.7;
    transition: filter 0.15s ease-out;

    ${Perk}:hover & {
        opacity: 1;
        filter: grayscale(0%);
    }
`;

const PathVFX = styled('img')`
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.25s ease-out;

    ${Perk}:hover & {
        opacity: 1;
    }
`;

const PathBody = styled('div')`
    color: #ddd;
    font-size: 10px;
    letter-spacing: 0.075em;
    line-height: 14px;
    opacity: 0.2;
    transition: opacity 0.15s ease-out;

    ${Perk}:hover & {
        opacity: 1;
    }
`;

const PathHeader = styled('header')`
    width: 100%;
    text-transform: uppercase;
    position: absolute;
    top: 199px;
    left: 0;
`;

const PathTitle = styled('div')`
    color: #727271;
    font-family: "BeaufortforLOL-Medium", sans-serif;
    font-size: 16px;
    letter-spacing: 0.15em;
    line-height: 19.2px;
    margin-bottom: 4px;
`;

const PathFooter = styled(PathBody)`
    margin: 46px 0 0;
    padding: 0 22px;
    width: 100%;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.05em;
`;

const KeyStones = styled('div')`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 10;
`;

const KeyStone = styled('div')`
    flex: auto 0 0;
    width: 50%;
    text-align: center;
    position: relative;
    z-index: 1;

    &:nth-child(3) {
        width: 100%;
    }
`;

const KeyStoneImg = styled('img')`
    border-radius: 32px;
    width: 62px;
    height: 62px;
    cursor: pointer;
`;


const ToolTipContent = ({ rune }) => (
    <div>
        <Description.Title>{rune.name}</Description.Title>
        <Description.P dangerouslySetInnerHTML={{ __html: rune.longDescription }} />
    </div>
);


const Path = ({ path }) => {
    const setPrimary = () => {
        pathsAPI.setPrimary(path.slug);
    };

    return (
        <Block key={path.name} onClick={setPrimary}>
            <Perk>
                <PerkBackground src={assetPath('/img/runeBuilder/assets/lines.png')} alt="" />
                <PerkBackground src={path.landing.glow} alt="" />

                <PathIconWrap>
                    <PathIcon src={path.landing.icon} alt="" />
                    <PathVFX src={path.landing.vfx} alt="" />

                    <PathHeader>
                        <PathTitle>{path.name}</PathTitle>
                        <PathBody>{path.slogan}</PathBody>
                    </PathHeader>
                </PathIconWrap>

                <PerkButtonOverlay onClick={setPrimary} />

                <KeyStones>
                    {path.slots[0].runes.map((rune, runeIndex) => {
                        const setPrimaryAndRune = (event) => {
                            event.stopPropagation();
                            console.log('setPrimaryAndRune');
                            pathsAPI.setPrimary(path.slug, runeIndex);
                        };

                        const content = <ToolTipContent rune={rune} />;

                        return (
                            <KeyStone key={`keystone-${path.slug}`} onClick={setPrimaryAndRune}>
                                <ToolTip content={content}>
                                    <KeyStoneImg src={assetPath(`/img/runeBuilder/runes/108x108/${rune.runeId}.png`)} alt="" />
                                </ToolTip>
                            </KeyStone>
                        );
                    })}
                </KeyStones>

                <PathFooter>{path.description}</PathFooter>

            </Perk>
        </Block>
    );
};

export default Path;
