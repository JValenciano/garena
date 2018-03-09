import React from 'react';
import styled, {
    keyframes,
} from 'styled-components';
import Youtube from 'react-youtube';


import {
    assetPath,
    pushToDataLayer,
} from 'helpers';


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const PathBlock = styled('div')`
    padding: 120px 60px 60px;
    min-height: 500px;
    animation: ${fadeIn} 0.75s ease forwards;
    position: relative;
`;

const PathContent = styled('div')`
    overflow: hidden;
    display: flex;
`;

const BackdropWrapper = styled('div')`
    overflow: hidden;
    opacity: 0.4;
    margin: 0;
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;

    &::before {
        content: '';
        display: block;
        background: linear-gradient(90deg, #000 0%, transparent 100%);
        width: 201px;
        height: 100%;
        position: absolute;
        right: 962px;
        bottom: 0;
        top: 0;
        z-index: 1;
    }

    &::after {
        content: '';
        display: block;
        background: linear-gradient(180deg, #000 0%, transparent 100%);
        width: 100%;
        height: 201px;
        position: absolute;
        right: 0;
        bottom: 520px;
        left: 0;
        z-index: 1;
    }
`;

const Backdrop = styled('img')`
    margin: 0;
    opacity: 0.35;
    width: 1162px;
    height: 720px;
    position: absolute;
    right: 0;
    bottom: 0;
`;

const Left = styled('div')`
    flex: 1 1 auto;
    padding-right: 60px;
`;

const Right = styled('div')`
    flex: 0 0 auto;
    width: 500px;
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
    transition: 0.2s;

    ${props => props.isInactive && `
        opacity: 0.4;
    `}
`;

const RuneButton = styled('button')`
    flex: 0 0 auto;
    margin: -24px 1px 0 -29px;
    padding: 0;
    width: 108px;
    height: 108px;
    background: none;
    border: 0;
    outline: 0;
    transition: 0.2s;

    ${props => props.isInactive && `
        transform: scale(${80 / 108}, ${80 / 108});
    `}
`;

const RuneImg = styled('img')`
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
`;

const P = styled('p')`
    flex: 1 1 auto;
    margin: 0;
    color: #b5b4b2;
    font-size: 17px;
    line-height: 28px;
`;


export default class Path extends React.Component {
    constructor(props) {
        super(props);

        const {
            path,
        } = props;

        const runes = path.slots[0].runes;
        const firstRune = runes[0];

        this.state = {
            currentRuneIndex: 0,
            videoId: path.videos[firstRune.runeId],
        };

        this.handleStateChange = (event) => {
            if (event.data === 0) {
                this.playNextRuneVideo(this.state.currentRuneIndex + 1);
            }

            if (event.data === 1) {
                pushToDataLayer({
                    eventAction: 'CarouselSection-Video',
                    eventLabel: runes[this.state.currentRuneIndex].name,
                });
            }
        };
    }

    playNextRuneVideo(index) {
        const {
            path,
        } = this.props;

        const runes = path.slots[0].runes;

        // If we're not on the last rune we're going to try playing the next one.
        if (index < runes.length) {
            const nextRune = runes[index];

            // If there's a video for the rune we're trying to play play it.
            if (path.videos[nextRune.runeId]) {
                this.setState({
                    currentRuneIndex: index,
                });
            // If no video then let's try playing the next rune's video.
            } else {
                this.playNextRuneVideo(index + 1);
            }
        }
    }

    render() {
        const {
            path,
        } = this.props;

        const currentRune = path.slots[0].runes[this.state.currentRuneIndex];
        const videoId = path.videos[currentRune.runeId];

        return (
            <PathBlock>

                <BackdropWrapper>
                    <Backdrop src={assetPath(`/img/customizer/${path.id}/splash.jpg`)} alt="" />
                </BackdropWrapper>

                <PathContent>
                    <Left>
                        <div className="c-frame c-frame--black">
                            <div className="c-frame__content">
                                <div className="o-aspect o-aspect--16x9 u-spacing-none">
                                    <Youtube
                                        videoId={videoId}
                                        opts={{
                                            id: 'player',
                                            playerVars: {
                                                autoplay: 1,
                                                rel: 0,
                                                controls: 0,
                                            },
                                        }}
                                        onReady={(event) => {
                                            if (event.target.a) {
                                                event.target.a.removeAttribute('allowfullscreen');
                                            }
                                        }}
                                        onStateChange={this.handleStateChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </Left>
                    <Right>
                        <Title>{path.description}</Title>

                        {path.slots[0].runes.map((rune, runeIndex) => {
                            const isInactive = this.state.currentRuneIndex !== runeIndex;

                            const handleClick = () => {
                                this.setState({
                                    currentRuneIndex: runeIndex,
                                }, () => {
                                    const event = {
                                        eventAction: 'CarouselSection-Video',
                                        eventLabel: rune.name,
                                    };

                                    pushToDataLayer(event);
                                });
                            };

                            const runeVideoId = path.videos[rune.runeId];

                            return (
                                <RuneBlock key={rune.name} isInactive={isInactive}>
                                    <RuneButton onClick={runeVideoId && handleClick} isInactive={isInactive}>
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
                            );
                        })}
                    </Right>
                </PathContent>
            </PathBlock>
        );
    }
}
