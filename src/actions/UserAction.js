import { createAction } from 'redux-actions';

export const GetListOptionsRequested = createAction('GET_LIST_OPTIONS_REQUESTED');
export const GetListOptionsReceived = createAction('GET_LIST_OPTIONS_RECEIVED');
export const GetListOptionsReceiveFailure = createAction('GET_LIST_OPTIONS_RECEIVE_FAILURE');