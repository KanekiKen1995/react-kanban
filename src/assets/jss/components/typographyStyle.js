import {
    primaryColor,
    infoColor,
    warningColor,
    dangerColor,
    successColor,
    roseColor,
    grayColor,
    whiteColor,
} from '../global';

const typographyStyle = (theme) => ({
    default: {
        color: 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
        color: primaryColor,
    },
    info: {
        color: infoColor,
    },
    warning: {
        color: warningColor,
    },
    danger: {
        color: dangerColor,
    },
    success: {
        color: successColor,
    },
    rose: {
        color: roseColor,
    },
    gray: {
        color: grayColor,
    },
    bold: {
        fontWeight: 700,
    },
    inherit: {
        color: 'inherit',
    },
    white: {
        color: whiteColor,
    },
    root: {
        wordBreak: 'break-all',
        whiteSpace: 'pre-line',
    },
    font: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '80%',
        },
    },
});

export default typographyStyle;
