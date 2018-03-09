import React from 'react';
import {
    connect,
} from 'react-redux';


import * as pathsAPI from 'runeBuilder/services/api/paths';


import PathSlot from './components/PathSlot';
import RuneChooser from './components/RuneChooser';
import EmptySlot from './components/EmptySlot';


const SecondaryPath = ({ paths, primary, secondary }) => (
    <section id="secondary-path">

        <PathSlot
            paths={paths}
            secondary={secondary}
            primary={primary}
        />

        {secondary.hasPath ? (
            <RuneChooser key={secondary.title} secondary={secondary} />
        ) : (
            <div key="empty-slots">
                <EmptySlot />
                <EmptySlot />
            </div>
        )}

    </section>
);


const mapStateToProps = state => ({
    paths: state.paths,
    primary: state.primary,
    secondary: state.secondary,
});


export default connect(mapStateToProps)(SecondaryPath);
