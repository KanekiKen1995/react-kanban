import React, { useEffect } from 'react';

export const ScrollEnhancer = (WrappedComponent) => {
    const ScrollTop = (props) => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return (
            <>
                <WrappedComponent {...props} />
            </>
        );
    };

    return ScrollTop;
};

export default (WrapperComponent) => (ScrollEnhancer(WrapperComponent));
