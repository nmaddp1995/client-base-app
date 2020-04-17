import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootSaga from '../saga';
import createRootReducer from '../reducer/index';

export const history = createBrowserHistory();
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(sagaMiddleWare, routerMiddleware(history))
    )
);

sagaMiddleWare.run(rootSaga);

export default store;
