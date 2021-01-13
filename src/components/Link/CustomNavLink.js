import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../Typography/CustomTypography';

import styles from '../../assets/jss/components/customNavLinkStyle';

const useStyles = makeStyles(styles);

const CustomNavLink = (props) => {
    const {
        link,
        text,
        activeColor,
        bordered,
        background,
        className,
        isActive,
    } = props;
    const classes = useStyles();
    const active = classNames({
        [classes[activeColor]]: activeColor,
        [classes.bordered]: bordered,
        [classes.background]: background,
    });
    return (
        <NavLink
            to={link}
            className={`${classes.link} ${className}`}
            activeClassName={active}
            exact
            isActive={isActive}
        >
            <Typography variant="subtitle1" color="inherit">
                {text}
            </Typography>
        </NavLink>
    );
};

CustomNavLink.defaultProps = {
    link: '',
    text: '',
    className: '',
    activeColor: 'info',
    background: false,
    bordered: true,
    isActive: undefined,
};

CustomNavLink.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
    activeColor: PropTypes.oneOf([
        'default',
        'primary',
        'info',
        'danger',
        'warning',
        'gray',
        'success',
        'rose',
        'inherit',
    ]),
    className: PropTypes.string,
    bordered: PropTypes.bool,
    background: PropTypes.bool,
    isActive: PropTypes.func,
};

export default CustomNavLink;
