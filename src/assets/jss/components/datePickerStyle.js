const datePickerStyle = (theme) => ({
    wrapperPicker: {
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    modifyDatePicker: {
        width: (props) => (props.fullWidth ? '100%' : 'auto'),
    },
    inputDatePicker: {
        padding: '10px 12px',
        width: '100%',
        fontSize: '14px',
    },
    datePickerIcon: {
        padding: '6px',
    },
    tilde: {
        padding: '8px',
    },
    error_text: {
        marginLeft: '14px',
        marginRight: '14px',
        color: 'red',
        margin: 0,
        fontSize: '0.75rem',
        marginTop: '3px',
        textAlign: 'left',
    },
});

export default datePickerStyle;
