import {
    infoBoxShadow,
    infoColor,
    successLightColor,
    whiteColor,
    grayColor,
} from '../global';

const SliderStyle = (theme) => ({
    wrapper: {
        backgroundColor: whiteColor,
    },
    sliderFirst: {
        maxWidth: '700px',
        margin: 'auto',
        borderRadius: '8px',
        ...infoBoxShadow,
        borderColor: infoColor,
        textAlign: 'center',
        display: 'block',
    },
    imgstyle: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '650px',
        margin: 'auto',
    },

    styleDot: {
        height: 100,
        width: 100,
        margin: 10,
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '4px',
        borderColor: grayColor,
        borderStyle: 'solid',
        '&:hover,&:focus': {
            outline: 'none',
            borderRadius: '4px',
            borderColor: successLightColor,
            opacity: 0.8,
        },
        // [theme.breakpoints.down('md')]: {
        //     height: 80,
        //     width: 80,
        //     margin: 8,
        // },
        // [theme.breakpoints.down('xs')]: {
        //     height: 50,
        //     width: 50,
        //     margin: 5,
        // },
    },
    titleName: {
        overflow: 'hidden',
        margin: '10px',
        cursor: 'pointer',
        '&:hover,&:focus': {
            outline: 'none',
            opacity: 0.8,
            color: successLightColor,
        },
    },
    styleDotActive: {
        height: 100,
        width: 100,
        margin: 10,
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '4px',
        ...infoBoxShadow,
        borderColor: successLightColor,
        borderStyle: 'solid',
        opacity: 0.8,
        '&:hover,&:focus': {
            outline: 'none',
        },
        // [theme.breakpoints.down('md')]: {
        //     height: 80,
        //     width: 80,
        //     margin: 8,
        // },
        // [theme.breakpoints.down('xs')]: {
        //     height: 50,
        //     width: 50,
        //     margin: 5,
        // },
    },
    btnStyle: {
        fontSize: 14,
        minWidth: '100px',
        margin: '10px',
    },

    buttonBig: {
        fontSize: '30px !important',
        minWidth: '250px !important',
        padding: '10px !important',
        margin: '30px !important',
        [theme.breakpoints.down('md')]: {
            fontSize: '24px !important',
            minWidth: '150px !important',
            margin: '10px  !important',
        },
    },
});

export default SliderStyle;
