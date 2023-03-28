import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancer(applyMiddleware(thunk));
const store = createStore(reducers,enhancers);

export default store;
