import React from 'react';
import debounce from 'lodash/debounce';


export default class ViewportSwitch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            match: -1,
        };
    }

    componentDidMount() {
        this.testMatch();

        this.handleResize = debounce(this.testMatch.bind(this), 100);

        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    testMatch() {
        const match = window.matchMedia(this.props.queryString).matches;

        if (match !== this.state.match) {
            this.setState({
                match,
            });
        }
    }


    render() {
        const {
            // The pass/fail components if not provided still need to be set to
            // valid children.
            PassComponent = <span />,
            FailComponent = <span />,
        } = this.props;

        if (this.state.match === -1) { return null; }

        // React.Children.only let's us return the correct component without
        // wrapping it in another tag. Helps with markup specific styles
        return React.Children.only(this.state.match ? PassComponent : FailComponent);
    }
}
