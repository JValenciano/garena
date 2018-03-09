import React from 'react';
import {
    connect,
} from 'react-redux';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import KeyStoneSlot from './components/KeyStoneSlot';
import Slot from '../Slot';


const PrimaryPath = ({ primary }) => {
    const sharedProps = {
        path: primary,
        toggleDrawer: pathsAPI.togglePrimaryRuneDrawer,
        setRune: pathsAPI.setPrimaryRune,
    };

    return (
        <section id="primary-path">

            <KeyStoneSlot {...sharedProps} />

            <Slot
                slot={primary.slots[0]}
                keystone
                slotIndex={0}
                selectText={window.i18n.runebuilder.selectKeystone}
                {...sharedProps}
            />

            <Slot
                slot={primary.slots[1]}
                slotIndex={1}
                selectText={window.i18n.runebuilder.selectGreater}
                {...sharedProps}
            />

            <Slot
                slot={primary.slots[2]}
                slotIndex={2}
                {...sharedProps}
            />

            <Slot
                slot={primary.slots[3]}
                slotIndex={3}
                {...sharedProps}
            />

        </section>
    );
};


const mapStateToProps = state => ({
    primary: state.primary,
});


export default connect(mapStateToProps)(PrimaryPath);
