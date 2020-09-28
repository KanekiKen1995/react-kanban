import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginReproduced, AuthExpireConfirmed } from '../actions/Auth';

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
            isAuthorized,
            isAuthExpired,
        } = props;
        // const history = useHistory(); // TODO waiting design dialog auth
        const [, setShowDialogConfirmAuthExpired] = useState(false); // TODO waiting design dialog auth
        useEffect(() => {
            if (!isAuthorized && onAuthReproduced) {
                // re produced token, role from cookies to redux store
                onAuthReproduced();
            }
        }, [isAuthorized, onAuthReproduced]);

        useEffect(() => {
            if (!isAuthorized && isAuthExpired) {
                setShowDialogConfirmAuthExpired(true);
            }
        }, [isAuthExpired, isAuthorized]);

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
