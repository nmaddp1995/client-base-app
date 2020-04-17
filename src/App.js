import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import NotFound from './page/NotFound';
import Profile from './page/Profile';
import PrivateRoute from './component/PrivateRoute';

export const URL_HOME = '/';
export const URL_LOGIN = '/login';
export const URL_SIGNUP = '/signup';
export const URL_PROFILE = '/profile';
export const URL_NOT_FOUND = '*';

const App = () => {
    return (
        <Switch>
            <Route exact path={URL_HOME}>
                <Home />
            </Route>
            <Route exact path={URL_LOGIN}>
                <Login />
            </Route>
            <Route exact path={URL_SIGNUP}>
                <Signup />
            </Route>
            <PrivateRoute exact path={URL_PROFILE}>
                <Profile />
            </PrivateRoute>
            <Route path={URL_NOT_FOUND}>
                <NotFound />
            </Route>
        </Switch>
    );
};

export default App;
