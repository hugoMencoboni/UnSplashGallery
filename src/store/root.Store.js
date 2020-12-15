import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import rootEpic from './root.Epics';
import rootReducer from './root.Reducer';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;