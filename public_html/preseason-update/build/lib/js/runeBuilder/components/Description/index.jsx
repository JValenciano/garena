import styled, {
    keyframes,
} from 'styled-components';


const appear = keyframes`
    to {
        opacity: 1;
        transform: none;
    }
`;

export const Block = styled('div')`
    padding-top: 22px;
    opacity: 0;
    transform: translateX(20px);
    animation: ${appear} 0.2s 0.25s linear forwards;
`;

export const Title = styled('div')`
    margin-bottom: 3px;
    color: ${props => props.color || '#f0e6d2'};
    font-family: "BeaufortforLOL-Medium", sans-serif;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.075em;
    text-transform: uppercase;

    ${props => props.flush && `
        margin: 0;
    `}

    ${props => props.small && `
        font-size: 12px;
        line-height: 16px;
    `}
`;

export const P = styled('p')`
    color: #a09b8c;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.025em;
    margin: 0 0 20px;

    ${props => props.flush && `
        margin: 0;
    `}
`;
