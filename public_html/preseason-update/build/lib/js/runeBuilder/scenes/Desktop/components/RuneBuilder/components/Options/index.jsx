import React from 'react';
import {
    connect,
} from 'react-redux';
import styled from 'styled-components';
import {
    assetPath,
} from 'helpers';


import * as descriptionsAPI from 'runeBuilder/services/api/descriptions';


const Block = styled('div')`
    position: absolute;
    bottom: 20px;
    left: 30px;
`;

const Label = styled('label')`
    color: #a09b8c;
    font-size: 12px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: 0.025em;

    &:hover {
        color: #f0e6d2;
    }
`;

const Input = styled('input')`
    display: none;
`;

const InputMask = styled('span')`
    margin-right: 7px;
    display: inline-block;
    vertical-align: middle;
    width: 14px;
    height: 14px;
    background: url("${assetPath('/img/global/checkbox-sprite.png')}");
    position: relative;
    top: -1px;

    ${Label}:hover & {
        background-position: 0 -14px;
    }

    ${Input}:checked + & {
        background-position: 0 -28px;
    }

    ${Label}:hover ${Input}:checked + & {
        background-position: 0 -42px;
    }
`;


class Options extends React.Component {
    constructor(props) {
        super(props);

        this.longDescriptions = this.props.longDescriptions;

        this.handleKeyDown = (event) => {
            if (event.keyCode === 16) {
                descriptionsAPI.setShift(true);
            }
        };

        this.handleKeyUp = (event) => {
            if (event.keyCode === 16) {
                descriptionsAPI.setShift(false);
            }
        };

        this.handleChange = (event) => {
            event.preventDefault();
            descriptionsAPI.toggleGlobal();
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        const {
            longDescriptions,
        } = this.props;

        return (
            <Block>
                <Label htmlFor="descriptions-checkbox">
                    <Input
                        id="descriptions-checkbox"
                        type="checkbox"
                        checked={longDescriptions.global || longDescriptions.shift}
                        onChange={this.handleChange}
                    />
                    <InputMask />
                    <span>{window.i18n.runebuilder.showDetailedDescriptions}</span>
                </Label>
            </Block>
        );
    }
}


function mapStateToProps(state) {
    return {
        longDescriptions: state.longDescriptions,
    };
}


export default connect(mapStateToProps)(Options);
