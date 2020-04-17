import { takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
    LOGIN_SAGA,
    SIGNUP_SAGA,
    LOGOUT_SAGA,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../action/user';
import { signupAPI, loginAPI, logoutApi } from '../api/user';
import { callAPISaga } from '.';
import { URL_HOME, URL_LOGIN } from '../../App';

function* loginSaga(action) {
    const { payload } = action;
    const { username, password } = payload;
    yield callAPISaga({
        actionTypes: [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE],
        apiFunction: loginAPI,
        variable: {
            username,
            password
        },
        success: {
            message: `Welcome back, ${username}`,
            * callback() {
                yield put(push(URL_HOME));
            }
        },
        failure: {
            useErrMsg: true
        }
    });
}

function* signupSaga(action) {
    const { payload } = action;
    const { username, email, password } = payload;
    yield callAPISaga({
        actionTypes: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE],
        apiFunction: signupAPI,
        variable: {
            username,
            email,
            password
        },
        success: {
            message: 'Signup success. Please login!',
            * callback() {
                yield put(push(URL_LOGIN));
            }
        },
        failure: {
            useErrMsg: true
        }
    });
}

function loginSuccessSaga(action) {
    const { token } = action.payload;
    localStorage.setItem('token', token);
}

function logoutSuccessSaga() {
    localStorage.removeItem('token');
}

function* logoutSaga() {
    yield callAPISaga({
        actionTypes: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE],
        apiFunction: logoutApi,
        success: {
            * callback() {
                yield put(push(URL_LOGIN));
            }
        }
    });
}

export default function* userSaga() {
    yield all([
        takeEvery(LOGIN_SAGA, loginSaga),
        takeEvery(SIGNUP_SAGA, signupSaga),
        takeEvery(LOGIN_SUCCESS, loginSuccessSaga),
        takeEvery(LOGOUT_SUCCESS, logoutSuccessSaga),
        takeEvery(LOGOUT_SAGA, logoutSaga)
    ]);
}
