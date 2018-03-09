import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';


const pulse = keyframes`
    from {
        transform: translateY(-50%);
    }
`;

const Block = styled('div')`
    height: ${props => `${(100 * props.total) - 39}px`};
    position: absolute;
    top: 89px;
    left: 50%;
`;

const Border = styled('div')`
    margin-left: -7px;
    width: 14px;
    height: 100%;
    padding: 2px;
    border: 2px solid rgba(200,170,110,0.2);
`;

const BarOuter = styled('div')`
    overflow: hidden;
    width: 6px;
    height: 100%;
    background: #1c1f21;
`;

const BarHeight = styled('div')`
    overflow: hidden;
    height: 100%;
    transform: translateY(${props => `${-100 * (props.total - props.current)}px`});
    transition: transform 0.3s ease;
`;

const BarInner = styled('div')`
    width: 100%;
    height: 200%;
    background: #fff;
`;

const BarHighlight = styled('div')`
    width: 100%;
    height: ${props => `${100 * props.total * 2}px`};
    box-shadow: inset 0 0 3px #000;

    ${props => props.isActive && `
        background: linear-gradient(0deg, ${props.highlight} 0%, transparent 50%, ${props.highlight} 100%);
        background-size: auto 100px;
        animation: ${pulse} ${props.total * 0.5}s linear forwards infinite;
        will-change: transform;
    `}
`;


const Progress = (props) => {
    const {
        path,
        total,
        current,
        isActive,
    } = props;

    return (
        <Block total={total}>
            <Border>
                <BarOuter>
                    {path.hasPath !== false &&
                        <BarHeight total={total} current={current}>
                            <BarInner total={total}>
                                <BarHighlight
                                    total={total}
                                    highlight={path.colors.gradient.bottom}
                                    isActive={isActive}
                                />
                            </BarInner>
                        </BarHeight>
                    }
                </BarOuter>
            </Border>
        </Block>
    );
};

export default Progress;
