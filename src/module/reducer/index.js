import { combineReducers } from 'redux';

import userReducer, { namespace as userNamespace } from './user';

const rootReducer = combineReducers({
    [userNamespace]: userReducer
});

export default rootReducer;
