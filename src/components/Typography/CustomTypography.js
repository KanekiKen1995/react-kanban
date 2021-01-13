import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from '../../assets/jss/components/typographyStyle';

const useStyles = makeStyles(styles);

const CustomTypography = (props) => {
    const {
        color,
        children,
        className,
        required,
        bold,
        variant,
        ...rest
    } = props;

    const classes = useStyles();
    const classTypo = ClassNames({
        [classes.root]: true,
        [classes[color]]: color,
        [classes.bold]: bold,
    });

    return (
        <Typography {...rest} className={`${classTypo} ${className} `} variant={variant}>
            <span className={classes.font}>
                {children}
                {required ? <span className={classes.danger}>（必須）</span> : null}
            </span>
        </Typography>
    );
};

CustomTypography.defaultProps = {
    children: '',
    className: '',
    color: 'default',
    required: false,
    bold: false,
    variant: 'subtitle2',
};

CustomTypography.propTypes = {
    children: PropTypes.oneOfType([() => null, PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    color: PropTypes.oneOf([
        'default',
        'primary',
        'info',
        'danger',
        'warning',
        'gray',
        'success',
        'rose',
        'inherit',
        'white',
    ]),
    required: PropTypes.bool,
    bold: PropTypes.bool,
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
        'srOnly',
        'inherit',
    ]),
};

export default CustomTypography;
