import {
    primaryColor,
    infoColor,
    warningColor,
    dangerColor,
    successColor,
    roseColor,
    grayColor,
    whiteColor,
    blackColor,
} from '../global';

const customNavLinkStyle = {
    link: {
        textDecoration: 'none',
        color: blackColor,
        padding: '12px',
        display: 'flex',
        flex: '1 1 auto',
        position: 'relative',
    },
    info: {
        color: infoColor,
    },
    primary: {
        color: primaryColor,
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
    inherit: {
        color: 'inherit',
    },
    background: {
        '&$info': {
            '&:hover,&:focus': {
                color: whiteColor,
                backgroundColor: infoColor,
            },
        },
        '&$inherit': {
            '&:hover,&:focus': {
                color: blackColor,
                backgroundColor: 'inherit',
            },
        },
        '&$primary': {
            '&:hover,&:focus': {
                color: whiteColor,
                backgroundColor: primaryColor,
            },
        },
        '&$warning': {
            '&:hover,&:focus': {
                color: whiteColor,
                backgroundColor: warningColor,
            },
        },
        '&$danger': {
            '&:hover,&:focus': {
                color: whiteColor,
                backgroundColor: dangerColor,
            },
        },
        '&$success': {
            '&:hover,&:focus': {
                color: whiteColor,
                backgroundColor: successColor,
            },
        },
        '&$rose': {
            '&:hover,&:focus': {
                color: whiteColor,
                backgroundColor: roseColor,
            },
        },
        '&$gray': {
            '&:hover,&:focus': {
                color: whiteColor,
                backgroundColor: grayColor,
            },
        },
    },
    bordered: {
        '&:after': {
            content: '""',
            margin: '0 auto',
            width: '40%',
            position: 'absolute',
            left: '12px',
            bottom: '0',
            borderBottom: '3px solid',
        },
    },
};

export default customNavLinkStyle;
