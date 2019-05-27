import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

// const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];

// const composer = process.env.NODE_ENV === 'development'
//   ? compose(
//     applyMiddleware(...middlewares),
//     console.tron.createEnhancer(),
//   )
//   : applyMiddleware(...[]);

// applyMiddleware(...middlewares);
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
