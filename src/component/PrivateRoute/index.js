import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserLogged } from '../../module/selector/user';

const PrivateRoute = ({ children, ...rest }) => {
    const isLogged = useSelector(selectUserLogged);
    return (
        <Route
            {...rest}
            render={({ location }) => (isLogged ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {
                            from: location
                        }
                    }}
                />
            ))}
        />
    );
};

export default PrivateRoute;
