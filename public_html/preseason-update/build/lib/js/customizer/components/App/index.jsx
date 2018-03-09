import React from 'react';
import scrollMonitor from 'scrollmonitor';


import {
    pushToDataLayer,
} from 'helpers';


import Desktop from 'customizer/scenes/Desktop';
import Mobile from 'customizer/scenes/Mobile';

import ViewportSwitch from './components/ViewportSwitch';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: -1,
            viewed: false,
        };

        this.setCurrent = (current) => {
            this.setState({
                current,
            }, () => {
                if (current !== -1) {
                    const event = {
                        eventAction: 'CarouselSection-Path',
                        eventLabel: this.props.paths[current].name,
                    };

                    pushToDataLayer(event);
                }
            });
        };
    }

    componentDidMount() {
        this.elementWatcher = scrollMonitor.create(this.appNode, -(window.innerHeight * -0.25));

        this.elementWatcher.enterViewport(() => {
            this.setState({
                viewed: true,
            });
            this.elementWatcher.destroy();
        });
    }

    render() {
        const {
            paths,
        } = this.props;

        return (
            <div ref={(node) => { this.appNode = node; }}>
                <ViewportSwitch
                    queryString="(min-width: 992px)"
                    PassComponent={
                        <Desktop
                            paths={paths}
                            {...this.state}
                            setCurrent={this.setCurrent}
                        />
                    }
                    FailComponent={
                        <Mobile
                            paths={paths}
                            {...this.state}
                            setCurrent={this.setCurrent}
                        />
                    }
                />
            </div>
        );
    }
}
