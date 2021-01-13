import {
    defaultFont,
    whiteColor,
    warningBoxShadow,
    warningColor,
} from '../global';

const popperStyle = (theme) => ({
    pop: {
        zIndex: '1000',
        width: (props) => props.size,
        // [theme.breakpoints.up('md')]: {
        //     width: (props) => props.size,
        // },
        borderRadius: '8px',
        ...warningBoxShadow,
    },
    root: {
        padding: '10px 15px',
    },
    paper: {
        borderRadius: '8px',
        border: `2px solid ${warningColor}`,
    },
    typography: {
        ...defaultFont,
        padding: '8px 14px',
        margin: 0,
        backgroundColor: '#f7f7f7',
        borderBottom: '1px solid #ebebeb',
        borderRadius: '5px 5px 0 0',
        display: 'table-cell',
    },
    arrow: {
        display: 'block',
        position: 'absolute',
        fontSize: '7px',
        width: '3em',
        height: '3em',
        '&:before': {
            content: '" "',
            display: 'block',
        },
    },
    top: {
        marginBottom: '10px',
        '& $arrow': {
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: `10px solid ${warningColor}`,
            bottom: '-10px',
            '&:before': {
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: `10px solid ${whiteColor}`,
                marginTop: '-12px',
                marginLeft: '-10px',
            },
        },
    },
    bottom: {
        marginTop: '10px',
        '& $arrow': {
            width: 0,
            height: 0,
            top: '-10px',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: `10px solid ${warningColor}`,
            '&:before': {
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: `10px solid ${whiteColor}`,
                marginTop: '2px',
                marginLeft: '-10px',
            },
        },
    },
    right: {
        marginTop: '10px',
        '& $arrow': {
            width: 0,
            height: 0,
            left: '-9px !important',
            borderTop: '10px solid transparent',
            borderRight: `10px solid ${warningColor}`,
            borderBottom: '10px solid transparent',
            '&:before': {
                borderTop: '10px solid transparent',
                borderRight: `10px solid ${whiteColor}`,
                borderBottom: '10px solid transparent',
                marginTop: '-10px',
                marginLeft: '3px',
            },
        },
    },
    'right-start': {
        marginTop: '-25px',
        '& $arrow': {
            width: 0,
            height: 0,
            top: '40px !important',
            left: '-9px !important',
            borderTop: '10px solid transparent',
            borderRight: `10px solid ${warningColor}`,
            borderBottom: '10px solid transparent',
            '&:before': {
                borderTop: '10px solid transparent',
                borderRight: `10px solid ${whiteColor}`,
                borderBottom: '10px solid transparent',
                marginTop: '-11px',
                marginLeft: '3px',
            },
        },
    },
});

export default popperStyle;
