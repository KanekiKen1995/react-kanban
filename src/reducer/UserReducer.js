import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as Actions from '../actions/UserAction';

const OptionReducer = handleActions({
  [Actions.GetListOptionsRequested]: (state) => ({
      ...state,
      isFetching: true,
  }),
  [Actions.GetListOptionsReceived]: (state, action) => ({
      ...state,
      isFetching: false,
      success: true,
      data: action.payload,
  }),
  [Actions.GetListOptionsReceiveFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      success: false,
      errors: action.payload.errors,
  }),
}, {
  isFetching: false,
  success: true,
  data: {},
  errors: {},
});

export default combineReducers({
  Options: OptionReducer,
});