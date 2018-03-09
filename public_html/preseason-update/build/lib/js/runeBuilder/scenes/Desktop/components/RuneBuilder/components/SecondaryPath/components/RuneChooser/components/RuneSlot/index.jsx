import React from 'react';


import * as Description from 'runeBuilder/components/Description';
import TruncatedText from 'runeBuilder/components/TruncatedText';


const RuneSlot = ({ rune, path }) => {
    if (!rune) {
        return (
            <Description.Block key="choose-rune2">
                <Description.Title small color={path.colors.title}>
                    {window.i18n.runebuilder.secondary.selectSecondary}
                </Description.Title>
            </Description.Block>
        );
    }

    return (
        <Description.Block key="rune2">
            <Description.Title small color={path.colors.title}>
                {rune.name}
            </Description.Title>
            <TruncatedText>
                <Description.P
                    dangerouslySetInnerHTML={{
                        __html: rune.shortDescription,
                    }}
                />
            </TruncatedText>
        </Description.Block>
    );
};


export default RuneSlot;
