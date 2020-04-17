import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import { URL_LOGIN } from '../../App';
import { selectUser } from '../../module/selector/user';
import { logoutSaga } from '../../module/action/user';
import styles from './styles.module.scss';

const Home = () => {
    const user = useSelector(selectUser);
    const isLogged = user.logged;
    const username = user.username;
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(logoutSaga());
    }, [dispatch]);
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                {!isLogged ? (
                    <Link to={URL_LOGIN} className={styles['login-btn']}>
                        Login
                    </Link>
                ) : (
                    <div>
                        {`Hi ${username}, `}
                        <Button
                            type="link"
                            onClick={onLogout}
                            className={styles['logout-btn']}
                        >
                            Logout
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
