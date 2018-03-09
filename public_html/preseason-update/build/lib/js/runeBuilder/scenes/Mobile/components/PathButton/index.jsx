import React from 'react';
import styled from 'styled-components';


const Button = styled('button')`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    padding: 0;
    border: 0;
    background: #1e2328;
    border-radius: 50%;
    text-align: center;
    position: relative;

    ${props => props.small && `
        width: 40px;
        height: 40px;
    `}
`;

const Icon = styled('img')`
    display: block;
    margin: auto;
    width: 42px;
    height: 42px;
    border-radius: 50%;

    ${props => props.small && `
        width: 36px;
        height: 36px;
    `}
`;

const InnerIcon = styled('svg')`
    margin: -24px;
    width: 48px;
    height: 48px;
    position: absolute;
    top: 50%;
    left: 50%;

    ${props => props.small && `
        margin: -20px;
        width: 40px;
        height: 40px;
    `}
`;


const PathButton = (props) => {
    const {
        icon,
        path,
        small,
        ...restProps
    } = props;

    return (
        <Button {...restProps} small={small}>
            {icon && <Icon src={icon} alt="" small={small} />}
            <InnerIcon viewBox="0 0 47 47" small={small}>
                <circle cx="23.5" cy="23.5" r="22.5" strokeWidth="2" fill="none" stroke={icon ? `url(#gradient-${path.slug})` : 'url(#gradient-yuma-dallasLight)'} />
            </InnerIcon>
        </Button>
    );
};

export default PathButton;
