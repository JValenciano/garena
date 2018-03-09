import styled from 'styled-components';


const Button = styled('button')`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    cursor: pointer;
    padding: 11px 21px;
    height: 60px;
    max-width: 100%;
    border: 0;
    color: #c7b184;
    fill: currentColor;
    box-shadow: 0 0 28px #000;
    font-family: "Beaufort for LOL", serif;
    font-size: 16px;
    line-height: 1;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    z-index: 1;
    transition: 0.3s;

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }

    &::before {
        background: linear-gradient(0deg, #72542a 0%, #bd9e5e 100%);
    }

    &::after {
        margin: 1px;
        background: #16181d;
        transition: inherit;
    }

    &:hover {
        color: #fff;
        text-decoration: none;
        box-shadow:
            0 0 28px #000,
            0 0 28px rgba(#000, 0.6);

        &::after {
            background: #1a1d21;
        }
    }

    ${props => props.square && `
        padding: 0;
        width: 34px;
        height: 34px;
        min-height: auto;
    `}

    & > svg {
        margin: auto;
    }
`;


export default Button;
