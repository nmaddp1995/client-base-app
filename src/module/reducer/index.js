import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer, { namespace as userNamespace } from './user';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    [userNamespace]: userReducer
});

export default createRootReducer;
