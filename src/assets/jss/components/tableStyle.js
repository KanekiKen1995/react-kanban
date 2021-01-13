import {
    warningColor,
    primaryColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    defaultFont,
} from '../global';

const tableStyle = (theme) => ({
    warningTableHeader: {
        color: warningColor,
    },
    primaryTableHeader: {
        color: primaryColor,
    },
    dangerTableHeader: {
        color: dangerColor,
    },
    successTableHeader: {
        color: successColor,
    },
    infoTableHeader: {
        color: infoColor,
    },
    roseTableHeader: {
        color: roseColor,
    },
    grayTableHeader: {
        color: grayColor,
    },
    tableHeadCell: {
        color: 'inherit',
        ...defaultFont,
        '&, &$tableCell': {
            fontSize: '1em',
        },
    },
    tableCell: {
        ...defaultFont,
        lineHeight: '1.42857143',
        padding: '12px 8px',
        verticalAlign: 'middle',
        fontSize: '0.8125rem',
    },
    tableResponsive: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    tableHeadRow: {
        height: '56px',
        color: 'inherit',
        display: 'table-row',
        outline: 'none',
        verticalAlign: 'middle',
    },
    tableBodyRow: {
        height: '48px',
        color: 'inherit',
        display: 'table-row',
        outline: 'none',
        verticalAlign: 'middle',
    },
    table_main: {
        padding: '20px 0',
    },
    table: {
        minWidth: 650,
    },
    spinner: {
        color: infoColor,
    },
});

export default tableStyle;
