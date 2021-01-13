import {
    grayColor,
    roseColor,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    whiteColor,
    infoDarkColor,
    infoLightColor,
    primaryDarkColor,
    primaryLightColor,
    warningDarkColor,
    warningLightColor,
    dangerDarkColor,
    dangerLightColor,
    successDarkColor,
    successLightColor,
    roseDarkColor,
    roseLightColor,
} from '../global';

const gradientBorder = {
    position: 'absolute',
    top: '-2px',
    bottom: '-2px',
    left: '-2px',
    right: '-2px',
    content: '""',
    zIndex: '-1',
    borderRadius: '30px',
};

const customButtonStyle = {
    button: {
        minHeight: 'auto',
        minWidth: 'auto',
        backgroundColor: grayColor,
        color: '#FFFFFF',
        boxShadow:
        '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
        border: 'none',
        borderRadius: '3px',
        position: 'relative',
        padding: '12px 30px',
        fontWeight: '400',
        textTransform: 'none',
        letterSpacing: '0',
        transition:
        'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        lineHeight: '1.42857143',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        touchAction: 'manipulation',
        cursor: 'pointer',
        '&:hover,&:focus': {
            color: '#FFFFFF',
            backgroundColor: grayColor,
            boxShadow:
          '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)',
        },
        '& .fab,& .fas,& .far,& .fal,& .material-icons': {
            position: 'relative',
            display: 'inline-block',
            top: '0',
            fontSize: '1.1rem',
            marginRight: '4px',
            verticalAlign: 'middle',
        },
        '& svg': {
            position: 'relative',
            display: 'inline-block',
            top: '0',
            width: '18px',
            height: '18px',
            marginRight: '4px',
            verticalAlign: 'middle',
        },
    },
    fullWidth: {
        width: '100%',
    },
    primary: {
        backgroundColor: primaryColor,
        boxShadow:
        '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
        '&:hover,&:focus': {
            backgroundColor: primaryColor,
            boxShadow:
          '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
        },
    },
    info: {
        backgroundColor: infoColor,
        boxShadow:
        '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
        '&:hover,&:focus': {
            backgroundColor: infoColor,
            boxShadow:
          '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
        },
        '&$disabled': {
            background: '#ccc!important',
            color: '#fff!important',
            '&:after': {
                background: '#ccc!important',
            },
        },
    },
    success: {
        backgroundColor: successColor,
        boxShadow:
        '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
        '&:hover,&:focus': {
            backgroundColor: successColor,
            boxShadow:
          '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
        },
    },
    warning: {
        backgroundColor: warningColor,
        boxShadow:
        '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
        '&:hover,&:focus': {
            backgroundColor: warningColor,
            boxShadow:
          '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
        },
    },
    danger: {
        backgroundColor: dangerColor,
        boxShadow:
        '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
        '&:hover,&:focus': {
            backgroundColor: dangerColor,
            boxShadow:
          '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)',
        },
    },
    rose: {
        backgroundColor: roseColor,
        boxShadow:
        '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
        '&:hover,&:focus': {
            backgroundColor: roseColor,
            boxShadow:
          '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)',
        },
    },
    white: {
        '&,&:focus,&:hover,&:visited': {
            backgroundColor: whiteColor,
            color: grayColor,
        },
    },
    round: {
        borderRadius: '30px',
    },
    disabled: {
        opacity: '0.65',
        pointerEvents: 'none',
    },
    simple: {
        '&,&:focus,&:hover,&:visited': {
            color: whiteColor,
            background: whiteColor,
            boxShadow: 'none',
        },
        '&$primary': {
            '&,&:focus,&:hover,&:visited': {
                color: primaryColor,
            },
        },
        '&$info': {
            '&,&:focus,&:hover,&:visited': {
                color: infoColor,
            },
        },
        '&$success': {
            '&,&:focus,&:hover,&:visited': {
                color: successColor,
            },
        },
        '&$warning': {
            '&,&:focus,&:hover,&:visited': {
                color: warningColor,
            },
        },
        '&$rose': {
            '&,&:focus,&:hover,&:visited': {
                color: roseColor,
            },
        },
        '&$danger': {
            '&,&:focus,&:hover,&:visited': {
                color: dangerColor,
            },
        },
    },
    border: {
        border: '2px solid',
        '&$primary': {
            borderColor: primaryColor,
        },
        '&$info': {
            borderColor: infoColor,
        },
        '&$success': {
            borderColor: successColor,
        },
        '&$warning': {
            borderColor: warningColor,
        },
        '&$rose': {
            borderColor: roseColor,
        },
        '&$danger': {
            borderColor: dangerColor,
        },
    },
    gradientBorder: {
        '&$info': {
            background: whiteColor,
            color: infoColor,
            '&:after': {
                ...gradientBorder,
                background: `linear-gradient(to right, ${infoDarkColor}, ${infoLightColor})`,
            },
        },
        '&$primary': {
            background: whiteColor,
            color: primaryColor,
            '&:after': {
                ...gradientBorder,
                background: `linear-gradient(to right, ${primaryDarkColor}, ${primaryLightColor})`,
            },
        },
        '&$warning': {
            background: whiteColor,
            color: warningColor,
            '&:after': {
                ...gradientBorder,
                background: `linear-gradient(to right, ${warningDarkColor}, ${warningLightColor})`,
            },
        },
        '&$danger': {
            background: whiteColor,
            color: dangerColor,
            '&:after': {
                ...gradientBorder,
                background: `linear-gradient(to right, ${dangerDarkColor}, ${dangerLightColor})`,
            },
        },
        '&$success': {
            background: whiteColor,
            color: successColor,
            '&:after': {
                ...gradientBorder,
                background: `linear-gradient(to right, ${successDarkColor}, ${successLightColor})`,
            },
        },
        '&$rose': {
            background: whiteColor,
            color: roseColor,
            '&:after': {
                ...gradientBorder,
                background: `linear-gradient(to right, ${roseDarkColor}, ${roseLightColor})`,
            },
        },
    },
    gradient: {
        '&$primary': {
            background: `linear-gradient(to right, ${primaryDarkColor}, ${primaryLightColor})`,
            color: whiteColor,
        },
        '&$info': {
            background: `linear-gradient(to right, ${infoDarkColor}, ${infoLightColor})`,
            color: whiteColor,
        },
        '&$danger': {
            background: `linear-gradient(to right, ${dangerDarkColor}, ${dangerLightColor})`,
            color: whiteColor,
        },
        '&$success': {
            background: `linear-gradient(to right, ${successDarkColor}, ${successLightColor})`,
            color: whiteColor,
        },
        '&$warning': {
            background: `linear-gradient(to right, ${warningDarkColor}, ${warningLightColor})`,
            color: whiteColor,
        },
        '&$rose': {
            background: `linear-gradient(to right, ${roseDarkColor}, ${roseLightColor})`,
            color: whiteColor,
        },
    },
    lg: {
        padding: '18px 36px',
        fontSize: '0.875rem',
        lineHeight: '1.333333',
    },
    md: {
        padding: '12px 30px',
        fontSize: '0.875rem',
        lineHeight: '1.333333',
    },
    sm: {
        padding: '6px 12px',
        fontSize: '0.6875rem',
        lineHeight: '1.5',
    },
    xs: {
        padding: '2px 6px',
        fontSize: '0.6875rem',
        lineHeight: '1.5',
    },
};

export default customButtonStyle;
