import React from 'react';
import {
    connect,
} from 'react-redux';


const RuneDescription = ({ rune, longDescriptions }) => {
    const showLong = longDescriptions.global || longDescriptions.shift;
    const description = showLong ? rune.longDescription : rune.shortDescription;

    return (
        <p dangerouslySetInnerHTML={{ __html: description }} />
    );
};


function mapStateToProps(state) {
    return {
        longDescriptions: state.longDescriptions,
    };
}


export default connect(mapStateToProps)(RuneDescription);
