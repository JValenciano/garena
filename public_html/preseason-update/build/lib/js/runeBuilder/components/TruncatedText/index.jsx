import React from 'react';
import shave from 'shave';


export default class TruncatedText extends React.Component {
    componentDidMount() {
        const {
            lines = 2,
        } = this.props;

        const text = this.innerRef || this.ref;

        if (text) {
            const lineHeight = parseFloat(window.getComputedStyle(text).lineHeight);
            const height = lineHeight * lines;

            shave(text, height);
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return React.cloneElement(this.props.children, {
            // Need to support styled components and regular nodes.
            innerRef: (node) => { this.innerRef = node; },
            ref: (node) => { this.ref = node; },
        });
    }
}
