import React from 'react';
import {
    connect,
} from 'react-redux';
import styled from 'styled-components';
import {
    pushToDataLayer,
} from 'helpers';
import {
    validateBuild,
} from 'runeBuilder/helpers';


import Desktop from 'runeBuilder/scenes/Desktop';
import Mobile from 'runeBuilder/scenes/Mobile';
import SVGGradients from './components/SVGGradients';
import ViewportSwitch from './components/ViewportSwitch';


const Block = styled('div')`

    * {
        outline: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }
`;


class App extends React.Component {
    constructor(props) {
        super(props);

        const {
            data,
        } = this.props;

        // Check if there's a set runeBuilderConfig and
        const config = window.runeBuilderConfig
            && window.runeBuilderConfig.length === 8
            && window.runeBuilderConfig.split('').map(Number);

        props.addPaths(data, config);
        this.buildCompleted = false;
    }

    componentWillReceiveProps(nextProps) {
        const validatedBuild = validateBuild(nextProps);

        if (!!validatedBuild && !this.buildCompleted) {
            const event = {
                eventAction: 'RuneBuilder-Completed',
                eventLabel: validatedBuild,
            };

            pushToDataLayer(event);

            this.buildCompleted = true;
        } else {
            this.buildCompleted = false;
        }
    }

    render() {
        const {
            paths,
        } = this.props;

        return (
            <Block>
                <ViewportSwitch
                    queryString="(min-width: 1061px)"
                    PassComponent={<Desktop paths={paths} />}
                    FailComponent={<Mobile paths={paths} />}
                />

                <SVGGradients paths={paths} />
            </Block>
        );
    }
}


function mapStateToProps(state) {
    return {
        paths: state.paths,
        primary: state.primary,
        secondary: state.secondary,
    };
}

function mapDispatchToProps(dispatch) {
    const addPaths = (paths, config) => ({
        type: 'ADD_PATHS',
        data: {
            paths,
            config,
        },
    });

    return {
        addPaths: (paths, config) => dispatch(addPaths(paths, config)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
