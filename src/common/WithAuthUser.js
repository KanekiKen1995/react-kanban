import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { LoginReproduced, AuthExpireConfirmed } from '../actions/Auth';
import { Role } from './Constants';

export const mapStateToProps = (state) => ({
    isAuthorized: state.auth.credential.isAuthorized,
    isAuthExpired: state.auth.uistate.isAuthExpired,
});

export const mapDispatchToProps = (dispatch) => ({
    onAuthReproduced: () => {
        dispatch(LoginReproduced());
    },
    onAuthExpireConfrimed: () => {
        dispatch(AuthExpireConfirmed());
    },
});

export const AuthEnhancer = (WrappedComponent) => {
    const Auth = (props) => {
        const {
            onAuthReproduced,
        } = props;
        useEffect(() => {
            const cookies = new Cookies();
            const token = cookies.get('oest');
            const role = cookies.get('osesr');
            if (token && onAuthReproduced && (_.toNumber(role) === Role.viewer || _.toNumber(role) === Role.organizer)) {
                // re produced token, role from cookies to redux store
                onAuthReproduced();
            }
        }, [onAuthReproduced]);

        // TODO maybe add dialog confirm auth expired back to login
        return (
            <>
                <WrappedComponent {...props} />
            </>
        );
    };

    Auth.defaultProps = {
        isAuthExpired: false,
    };

    Auth.propTypes = {
        onAuthReproduced: PropTypes.func.isRequired,
        isAuthorized: PropTypes.bool.isRequired,
        isAuthExpired: PropTypes.bool,
    };

    return Auth;
};

export default (WrapperComponent) => connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthEnhancer(WrapperComponent));
