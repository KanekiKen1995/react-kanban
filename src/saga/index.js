import { fork } from 'redux-saga/effects';
import userSaga  from "./userSaga";

export default function* root() {
    yield fork(userSaga);
}
