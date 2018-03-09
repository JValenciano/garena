import React from 'react';
import {
    connect,
} from 'react-redux';
import styled, {
    keyframes,
} from 'styled-components';
import {
    validateBuild,
    facebookShare,
    twitterShare,
    vkShare,
    shareLink,
} from 'runeBuilder/helpers';


import Button from '../Button';

const animateIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


const Block = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${animateIn} 0.5s ease forwards;

    ${props => props.fixed && `
        padding: 10px 10px 10px 40px;
        background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.4) 10%);
        position: absolute;
        bottom: 0;
        right: 0;
    `}
`;

const ShareTitle = styled('h3')`
    margin: 0;
    color: #b5b4b2;
    font-family: "Spiegel", sans-serif;
    font-size: 12px;
    font-weight: normal;
`;

const ShareButton = Button.extend`
    margin-left: 10px;
`;

const ShareLink = ShareButton.withComponent('a');

const ShareSVG = styled('svg')`
    fill: currentColor;

    path {
        fill: currentColor;
    }
`;


class Share extends React.Component {
    render() {
        const {
            primary,
            fixed,
        } = this.props;

        const config = validateBuild(this.props);

        if (!config) {
            return null;
        }

        const keystone = primary.slots[0].runes[primary.slots[0].choice];
        const link = `${window.siteUrl}/${primary.id}-${keystone.runeId}?build=${config}`;

        const handleFacebookShare = () => {
            facebookShare(link);
        };

        const handleTwitterShare = () => {
            twitterShare(link);
        };

        const handleVKShare = () => {
            vkShare(link);
        };

        const handleShareLink = () => {
            shareLink(link);
        };

        return (
            <Block fixed={fixed}>
                <ShareTitle>{window.i18n.runebuilder.share.title}</ShareTitle>
                <ShareButton
                    square
                    onClick={handleFacebookShare}
                    title={window.i18n.runebuilder.share.facebook}
                >
                    <ShareSVG width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
                    </ShareSVG>
                    <span className="u-sr-only">{window.i18n.runebuilder.share.facebook}</span>
                </ShareButton>
                <ShareButton
                    square
                    onClick={handleTwitterShare}
                    title={window.i18n.runebuilder.share.twitter}
                >
                    <ShareSVG width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
                    </ShareSVG>
                    <span className="u-sr-only">{window.i18n.runebuilder.share.twitter}</span>
                </ShareButton>
                {window.language === 'ru' && (
                    <ShareButton
                        square
                        onClick={handleVKShare}
                        title={window.i18n.runebuilder.share.vk}
                    >
                        <ShareSVG width="18" height="16" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1981 520q23 64-150 294-24 32-65 85-40 51-55 72t-30.5 49.5-12 42 13 34.5 32.5 43 57 53q4 2 5 4 141 131 191 221 3 5 6.5 12.5t7 26.5-.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66-70.5-57.5l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211-130.5-272q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5 41.5 38.5 34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 16-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-.5 48 3.5 40.5 11.5 39 22.5 24.5q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5 13-3 20-.5 288-2q39-5 64 2.5t31 16.5z" />
                        </ShareSVG>
                        <span className="u-sr-only">{window.i18n.runebuilder.share.vk}</span>
                    </ShareButton>
                )}
                <ShareLink
                    square
                    href={link}
                    target="_blank"
                    title={window.i18n.runebuilder.share.link}
                    onClick={handleShareLink}
                >
                    <ShareSVG width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
                    </ShareSVG>
                    <span className="u-sr-only">{window.i18n.runebuilder.share.link}</span>
                </ShareLink>
            </Block>
        );
    }
}


function mapStateToProps(state) {
    return {
        paths: state.paths,
        primary: state.primary,
        secondary: state.secondary,
    };
}


export default connect(mapStateToProps)(Share);
