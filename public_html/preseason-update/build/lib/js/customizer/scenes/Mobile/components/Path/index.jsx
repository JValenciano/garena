import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';
import Youtube from 'react-youtube';


import {
    assetPath,
    pushToDataLayer,
} from 'helpers';


require('smoothscroll-polyfill').polyfill();


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


const Block = styled('div')`
    display: block;
`;

const Banner = styled('button')`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin-bottom: ${(18 / 620) * 100}%;
    width: 100%;
    height: 70px;
    background #000;
    border: 2px solid #31271e;
    position: relative;
    z-index: 0;
`;

const BannerImg = styled('img')`
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
`;

const BannerTitle = styled('h3')`
    margin: 0;
    font-size: 14px;
    text-transform: uppercase;
`;

const Content = styled('div')`
    padding: ${(20 / 620) * 100}%;
    animation: ${fadeIn} 0.75s ease forwards;
`;

const Title = styled('h2')`
    margin: 0 0 30px;
    color: #a69f90;
    font-size: 22px;
    line-height: 28px;
    text-transform: uppercase;
`;

const RuneBlock = styled('div')`
    display: flex;
    margin-bottom: 25px;
`;

const RuneButton = styled('button')`
    flex: 0 0 auto;
    margin: -10px 15px 0 0;
    padding: 0;
    width: 80px;
    height: 80px;
    background: none;
    border: 0;
    outline: 0;
`;

const RuneImg = styled('img')`
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
`;

const ToggleIcon = styled('div')`
    margin: 0 0 0 auto;
    width: 30px;
    height: 30px;
    background: url('${window.versionedAssetPath}/img/customizer/toggle-arrow.png');
    background-size: contain;
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.68);

    ${props => props.isActive && `
        transform: rotate(180deg);
    `}
`;

const P = styled('p')`
    flex: 1 1 auto;
    margin: 0;
    color: #b5b4b2;
    font-size: 14px;
    line-height: 1.5;
`;


export default class Path extends React.Component {
    constructor(props) {
        super(props);

        const {
            path,
        } = props;

        const firstRune = path.slots[0].runes[0];

        this.state = {
            videoId: path.videos[firstRune.runeId],
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.active !== this.props.active && this.props.active && this.node) {
            if (this.node) {
                window.scrollTo({
                    top: (this.node.getBoundingClientRect().top + window.scrollY) - 20,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        }
    }

    render() {
        const {
            path,
            active,
            setCurrent,
        } = this.props;

        return (
            <Block>
                <Banner innerRef={(node) => { this.node = node; }} onClick={setCurrent}>
                    <BannerImg src={assetPath(`/img/runeBuilder/assets/root-component/${path.slug.slice(0, 1).toUpperCase()}${path.slug.slice(1)}.png`)} alt="" />
                    <BannerTitle>{path.name}</BannerTitle>
                    <ToggleIcon isActive={active}>
                        <span className="u-sr-only">
                            {window.i18n.runebuilder.toggle}
                        </span>
                    </ToggleIcon>
                </Banner>

                {active && (
                    <Content>
                        <Title>{path.description}</Title>

                        {path.slots[0].runes.map((rune) => {
                            const handleClick = () => {
                                this.setState({
                                    videoId: path.videos[rune.runeId],
                                }, () => {
                                    const event = {
                                        eventAction: 'CarouselSection-Video',
                                        eventLabel: rune.name,
                                    };

                                    pushToDataLayer(event);
                                });
                            };

                            const videoId = path.videos[rune.runeId];

                            return (
                                <div key={rune.name}>
                                    {videoId && (
                                        <div className="c-frame u-spacing-20">
                                            <div className="c-frame__content">
                                                <div className="o-aspect o-aspect--16x9 u-spacing-none">
                                                    <Youtube
                                                        videoId={videoId}
                                                        opts={{
                                                            playerVars: {
                                                                autoplay: 0,
                                                                rel: 0,
                                                                controls: 0,
                                                            },
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <RuneBlock>
                                        <RuneButton onClick={handleClick}>
                                            <RuneImg src={assetPath(`/img/runeBuilder/runes/108x108/${rune.runeId}.png`)} alt="" />
                                        </RuneButton>

                                        <P>
                                            <strong>{rune.name}</strong>
                                            {' - '}
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: rune.shortDescription,
                                                }}
                                            />
                                        </P>
                                    </RuneBlock>
                                </div>
                            );
                        })}

                    </Content>
                )}
            </Block>
        );
    }
}
