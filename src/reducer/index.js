import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import UserReducer1111111111111 from './UserReducer'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    UserReducer1111111111111,
});

export default createRootReducer;
