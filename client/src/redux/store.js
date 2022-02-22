import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const thunkApplied = applyMiddleware(thunk);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = devTools ? compose(thunkApplied, devTools) : compose(thunkApplied);
export const store = createStore(reducers, appliedMiddleware);

store.getState();