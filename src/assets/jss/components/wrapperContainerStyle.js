import {
    containerFluid,
} from '../global';

const wrapperContainerStyle = (theme) => ({
    container: {
        zIndex: '12',
        ...containerFluid,
        [theme.breakpoints.down('md')]: {
            paddingLeft: '0',
            paddingRight: '0',
        },
    },
});

export default wrapperContainerStyle;
