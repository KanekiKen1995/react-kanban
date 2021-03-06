import {
    drawerWidth,
    transition,
    boxShadow,
    // defaultFont,
    primaryColor,
    primaryBoxShadow,
    infoColor,
    warningColor,
    dangerColor,
    whiteColor,
    grayColor,
    blackColor,
    visitorColor,
    visitorLinkColor,
    exhibitorColor,
    hexToRgb,
    successLightColor,
} from '../global';

const sidebarStyle = (theme) => ({
    drawerPaper: {
        border: 'none',
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        zIndex: '1',
        ...boxShadow,
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth,
            ...boxShadow,
            position: 'fixed',
            display: 'block',
            top: '0',
            height: '100vh',
            right: '0',
            left: 'auto',
            zIndex: '1032',
            visibility: 'visible',
            overflowY: 'visible',
            borderTop: 'none',
            textAlign: 'left',
            paddingRight: '0px',
            paddingLeft: '0',
            transform: `translate3d(${drawerWidth}px, 0, 0)`,
            ...transition,
        },
    },
    drawerPaperRTL: {
        [theme.breakpoints.up('md')]: {
            left: 'auto !important',
            right: '0 !important',
        },
        [theme.breakpoints.down('sm')]: {
            left: '0  !important',
            right: 'auto !important',
        },
    },
    logo: {
        position: 'relative',
        padding: '15px 15px',
        zIndex: '4',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            height: '1px',
            right: '15px',
            width: 'calc(100% - 30px)',
            backgroundColor: `rgba(${hexToRgb(grayColor)}, 0.3)`,
        },
    },
    logoLink: {
        // ...defaultFont,
        textTransform: 'uppercase',
        padding: '5px 0',
        display: 'block',
        fontSize: '18px',
        textAlign: 'left',
        fontWeight: '400',
        lineHeight: '30px',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        '&,&:hover': {
            color: whiteColor,
        },
    },
    logoLinkRTL: {
        textAlign: 'right',
    },
    logoImage: {
        width: '30px',
        display: 'inline-block',
        maxHeight: '30px',
        marginLeft: '10px',
        marginRight: '15px',
    },
    img: {
        width: '35px',
        top: '22px',
        position: 'absolute',
        verticalAlign: 'middle',
        border: '0',
    },
    background: {
        position: 'absolute',
        zIndex: '1',
        height: '100%',
        width: '100%',
        display: 'block',
        top: '0',
        left: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        '&:after': {
            position: 'absolute',
            zIndex: '3',
            width: '100%',
            height: '100%',
            content: '""',
            display: 'block',
            background: exhibitorColor,
            opacity: '.8',
        },
    },
    visitorBackGround: {
        position: 'absolute',
        zIndex: '1',
        height: '100%',
        width: '100%',
        display: 'block',
        top: '0',
        left: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        '&:after': {
            position: 'absolute',
            zIndex: '3',
            width: '100%',
            height: '100%',
            content: '""',
            display: 'block',
            background: visitorColor,
            opacity: '.8',
        },
    },
    list: {
        marginTop: '20px',
        paddingLeft: '0',
        paddingTop: '0',
        paddingBottom: '0',
        marginBottom: '0',
        listStyle: 'none',
        position: 'unset',
    },
    item: {
        position: 'relative',
        display: 'block',
        textDecoration: 'none',
        '&:hover,&:focus,&:visited,&': {
            color: whiteColor,
        },
    },
    itemLink: {
        width: 'auto',
        transition: 'all 300ms linear',
        margin: '10px 15px 0',
        borderRadius: '3px',
        position: 'relative',
        display: 'block',
        padding: '10px 15px',
        backgroundColor: 'transparent',
        // ...defaultFont,
        '& svg': {
            width: '24px',
            height: '30px',
            fontSize: '24px',
            lineHeight: '30px',
            float: 'left',
            marginRight: '15px',
            textAlign: 'center',
            verticalAlign: 'middle',
            color: `rgba(${hexToRgb(whiteColor)}, 0.8)`,
        },
    },
    itemIcon: {
        width: '24px',
        height: '30px',
        fontSize: '24px',
        lineHeight: '30px',
        float: 'left',
        marginRight: '15px',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: `rgba(${hexToRgb(whiteColor)}, 0.8)`,
    },
    itemIconRTL: {
        marginRight: '3px',
        marginLeft: '15px',
        float: 'right',
    },
    itemText: {
        // ...defaultFont,
        margin: '0',
        lineHeight: '30px',
        fontSize: '16px',
        color: whiteColor,
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
    },
    visitorText: {
        // ...defaultFont,
        margin: '0',
        lineHeight: '30px',
        fontSize: '16px',
        color: blackColor,
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
    },
    itemTextRTL: {
        textAlign: 'right',
    },
    whiteFont: {
        color: whiteColor,
    },
    visitorFont: {
        color: visitorLinkColor,
    },
    purple: {
        backgroundColor: primaryColor,
        ...primaryBoxShadow,
        '&:hover,&:focus': {
            backgroundColor: primaryColor,
            ...primaryBoxShadow,
        },
    },
    blue: {
        backgroundColor: infoColor,
        boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(infoColor)
        },.28), 0 4px 20px 0 rgba(${
            hexToRgb(blackColor)
        },.12), 0 7px 8px -5px rgba(${
            hexToRgb(infoColor)
        },.2)`,
        '&:hover,&:focus': {
            backgroundColor: infoColor,
            boxShadow:
          `0 12px 20px -10px rgba(${
              hexToRgb(infoColor)
          },.28), 0 4px 20px 0 rgba(${
              hexToRgb(blackColor)
          },.12), 0 7px 8px -5px rgba(${
              hexToRgb(infoColor)
          },.2)`,
        },
    },
    green: {
        backgroundColor: successLightColor,
        boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(successLightColor)
        },.28), 0 4px 20px 0 rgba(${
            hexToRgb(blackColor)
        },.12), 0 7px 8px -5px rgba(${
            hexToRgb(successLightColor)
        },.2)`,
        '&:hover,&:focus': {
            backgroundColor: successLightColor,
            boxShadow:
          `0 12px 20px -10px rgba(${
              hexToRgb(successLightColor)
          },.28), 0 4px 20px 0 rgba(${
              hexToRgb(blackColor)
          },.12), 0 7px 8px -5px rgba(${
              hexToRgb(successLightColor)
          },.2)`,
        },
    },
    orange: {
        backgroundColor: warningColor,
        boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(warningColor)
        },.28), 0 4px 20px 0 rgba(${
            hexToRgb(blackColor)
        },.12), 0 7px 8px -5px rgba(${
            hexToRgb(warningColor)
        },.2)`,
        '&:hover,&:focus': {
            backgroundColor: warningColor,
            boxShadow:
          `0 12px 20px -10px rgba(${
              hexToRgb(warningColor)
          },.28), 0 4px 20px 0 rgba(${
              hexToRgb(blackColor)
          },.12), 0 7px 8px -5px rgba(${
              hexToRgb(warningColor)
          },.2)`,
        },
    },
    red: {
        backgroundColor: dangerColor,
        boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(dangerColor)
        },.28), 0 4px 20px 0 rgba(${
            hexToRgb(blackColor)
        },.12), 0 7px 8px -5px rgba(${
            hexToRgb(dangerColor)
        },.2)`,
        '&:hover,&:focus': {
            backgroundColor: dangerColor,
            boxShadow:
          `0 12px 20px -10px rgba(${
              hexToRgb(dangerColor)
          },.28), 0 4px 20px 0 rgba(${
              hexToRgb(blackColor)
          },.12), 0 7px 8px -5px rgba(${
              hexToRgb(dangerColor)
          },.2)`,
        },
    },
    sidebarWrapper: {
        position: 'relative',
        height: 'calc(100vh - 195px)',
        overflow: 'auto',
        width: '260px',
        zIndex: '4',
        overflowScrolling: 'touch',
        overflowY: 'auto',
        '&::-webkit-scrollbar-track': {
            // '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
            backgroundColor: '#F5F5F5',
        },
        '&::-webkit-scrollbar': {
            width: '5px',
            backgroundColor: '#F5F5F5',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#0ae',
            backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, color-stop(.5, rgba(255, 255, 255, .2)),color-stop(.5, transparent), to(transparent))',
        },
    },
    logOutButton: {
        [theme.breakpoints.up('md')]: {
            // position: 'fixed',
            width: '260px',
            bottom: '13px',
        },
    },
    brand: {
        cursor: 'pointer',
    },
    homeButton: {
        textDecoration: 'none',
        '&:hover,&:focus': {
            textDecoration: 'none',
        },
        [theme.breakpoints.up('md')]: {
            position: 'fixed',
            width: '260px',
            bottom: '70px',
        },
    },
    userbrand: {
        cursor: 'pointer',
        fontSize: '45px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    },
    userleft: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            justifyContent: 'space-between',
        },
    },
    brandMobile: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            height: '60px',
        },
    },
    docked: {
        [theme.breakpoints.up('md')]: {
            height: '100%',
            width: '260px',
        },
    },
    fixedSidebar: {
        position: 'fixed !important',
    },
    buttonBig: {
        fontSize: '30px !important',
        minWidth: '200px !important',
        padding: '10px !important',
        margin: '30px !important',
        [theme.breakpoints.down('md')]: {
            fontSize: '24px !important',
            minWidth: '150px !important',
            margin: '10px  !important',
        },
    },
});

export default sidebarStyle;
