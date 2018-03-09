import React from 'react';
import styled from 'styled-components';


import {
    assetPath,
} from 'helpers';


import Spinner from '../Spinner';
import PreloadedImage from '../PreloadedImage';


const Button = styled('button')`
    display: block;
    padding: 0;
    width: 48px;
    height: 48px;
    border: 0;
    background: #1e2328;
    border-radius: 50%;
    box-shadow: inset 0 0 7px #000, 0 0 1px #000;
    position: relative;
    transition: opacity 0.2s, filter 0.2s;

    ${props => props.size === 'small' && `
        width: 62px;
        height: 62px;
    `}

    ${props => props.size === 'large' && `
        width: 62px;
        height: 62px;
    `}

    ${props => props.isChosen && `
        opacity: 0.5;
        filter: grayscale(100%);
    `}

    &:hover {
        opacity: 1;
        filter: none;
    }
`;

const DisabledButton = Button.withComponent('div');

const OuterFrame = styled('svg')`
    opacity: 0;
    width: 62px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s;

    ${props => props.size === 'large' && `
        width: 76px;
        height: 76px;
    `}

    ${Button}:hover & {
        opacity: 0.5;
    }
`;

const InnerFrame = styled('svg')`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Icon = styled(PreloadedImage)`
    margin: 0;
    width: 46px;
    height: 46px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s, transform 0.2s;

    ${props => props.keystone && `
        width: 82px;
        height: 82px;
        z-index: 1;
    `}

    ${props => props.keystone && props.size === 'large' && `
        width: 108px;
        height: 108px;
    `}

    ${props => props.isActive && `
        transform: translate(-50%, -50%) scale(0.75);
        opacity: 0.5;
    `}
`;


const SlotButton = ({ rune, path, size = 'default', keystone, isActive, isDisabled, isChosen, onClick }) => {
    if (isDisabled) {
        return (
            <DisabledButton size={size} keystone={keystone}>
                <InnerFrame viewBox="0 0 47 47">
                    <circle cx="23.5" cy="23.5" r="22.5" strokeWidth="2" fill="none" stroke="url(#gradient-yuma-dallasLight)" />
                </InnerFrame>
            </DisabledButton>
        );
    }

    const stroke = path ? `url(#gradient-${path.slug})` : 'url(#gradient-yuma-dallasLight)';

    return (
        <Button size={size} keystone={keystone} onClick={onClick} isChosen={isChosen}>
            <OuterFrame viewBox="0 0 60 60" size={size}>
                <circle cx="30" cy="30" r="28.5" strokeWidth="3" fill="none" stroke={stroke} />
            </OuterFrame>
            {rune && <Icon key={rune.runeId} src={assetPath(`/img/runeBuilder/runes/108x108/${rune.runeId}.png`)} alt="" keystone={keystone} size={size} isActive={isActive} />}
            <InnerFrame viewBox="0 0 47 47">
                <circle cx="23.5" cy="23.5" r="22.5" strokeWidth="2" fill="none" stroke={stroke} />
            </InnerFrame>
            <Spinner keystone={keystone} isActive={isActive} />
        </Button>
    );
};


export default SlotButton;
