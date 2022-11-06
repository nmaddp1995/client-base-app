import React, { lazy, Suspense } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import LazyLoadProgressCircle from './component/LazyLoadProgressCircle';

export const URL_HOME = '/';
export const URL_LOGIN = '/login';
export const URL_SIGNUP = '/signup';
export const URL_PROFILE = '/profile';
export const URL_NOT_FOUND = '*';

const Home = lazy(() => import('./page/Home'));
const Login = lazy(() => import('./page/Login'));
const Signup = lazy(() => import('./page/Signup'));
const NotFound = lazy(() => import('./page/NotFound'));
const Profile = lazy(() => import('./page/Profile'));
const PrivateRoute = lazy(() => import('./component/PrivateRoute'));

const App = () => {
    return (
        <Suspense fallback={<LazyLoadProgressCircle />}>
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
        </Suspense>
    );
};

export default App;
