export const media = {
    mobile: 320,
    tablet: 480,
    desktop: 1440,
};

export const MediaStr = {
    mobile: `@media (min-width: ${media.mobile}px) and (max-width: ${media.tablet - 1}px)`,
    tablet: `@media (min-width: ${media.tablet}px) and (max-width: ${media.desktop - 1}px)`,
    mobileAndTablet: `@media only screen and (min-width: ${media.mobile}px) and (max-width: ${media.desktop - 1}px)`,
    desktop: `@media screen and (min-width: ${media.desktop}px)`,
};

export const SidePadding = {
    mobile: 20,
    tablet: 40,
    desktop: 140,
};

export const Colors = {
    Lightgrey: '#f8f8f8',
    Grey: '#ABABAB',
    Darkgrey: '#333333',
    Primary: '#8EA7FF',
    Red: '#FF6767',
};
