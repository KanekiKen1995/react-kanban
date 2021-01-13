const style = (theme) => ({
    wrapper: {
        // marginTop: theme.spacing(10),
        position: 'relative',
        zIndex: 1,
    },
    leftButtonWrapper: {
        textAlign: 'right',
    },
    [theme.breakpoints.down('xs')]: {
        wrapper: {
            textAlign: 'center',
        },
        leftButtonWrapper: {
            textAlign: 'inherit',
        },
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

export default style;
