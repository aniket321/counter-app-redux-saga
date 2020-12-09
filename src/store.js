import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSagas from './saga/sagas'

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

export default store;
