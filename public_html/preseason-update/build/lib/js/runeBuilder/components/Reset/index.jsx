import React from 'react';
import styled from 'styled-components';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import Button from 'runeBuilder/components/Button';


const Block = styled('div')`
    ${props => props.fixed && `
        padding: 10px 10px 10px 40px;
        position: absolute;
        top: 0;
        right: 0;
    `}
`;


const Reset = ({ fixed }) => (
    <Block fixed={fixed}>
        <Button square onClick={pathsAPI.clearPrimary} title={window.i18n.runebuilder.reset}>
            <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z" /></svg>
            <span className="u-sr-only">
                {window.i18n.runebuilder.reset}
            </span>
        </Button>
    </Block>
);


export default Reset;
