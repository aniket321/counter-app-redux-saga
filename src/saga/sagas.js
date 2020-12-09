import { put, takeLatest, all, delay } from 'redux-saga/effects';
import { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } from '../actions/types';

function* incrementAsync() {
   yield delay(1000);
   yield put({ type: INCREMENT });
}

function* decrementAsync() {
    yield delay(1000);
    yield put({ type: DECREMENT });
}

function* watchIncrementAsync() {
   yield takeLatest(INCREMENT_ASYNC, incrementAsync);
}

function* watchDecrementAsync() {
    yield takeLatest(DECREMENT_ASYNC, decrementAsync);
}

export default function* rootSagas() {
   yield all([watchIncrementAsync(), watchDecrementAsync()]);
}
