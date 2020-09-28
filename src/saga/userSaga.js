import {
  takeLatest, all, put, call,
} from 'redux-saga/effects';
import API from '../common/API';
import * as Actions from '../actions/UserAction';

function* getListOptions() {
  try {
      const response = yield call(
          API.get,
          {
              endpoint: '/api/v1/settings/options/',
          },
      );
      yield put(Actions.GetListOptionsReceived(response));
  } catch (error) {
      yield put(Actions.GetListOptionsReceiveFailure(yield error));
  }
}

export default function* AdminEventManagement() {
  yield all([
      takeLatest('GET_LIST_OPTIONS_REQUESTED', getListOptions),
  ]);
}
