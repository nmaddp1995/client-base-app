export const LOGIN_SAGA = 'user/LOGIN_SAGA';
export const SIGNUP_SAGA = 'user/SIGNUP_SAGA';
export const LOGOUT_SAGA = 'user/LOGOUT_SAGA';
export const LOGIN = 'user/LOGIN';
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'user/LOGIN_FAILURE';
export const SIGNUP = 'user/SIGNUP';
export const SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'user/SIGNUP_FAILURE';
export const LOGOUT = 'user/LOGOUT';
export const LOGOUT_SUCCESS = 'user/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'user/LOGOUT_FAILURE';
export const LOGIN_FB_SAGA = 'user/LOGIN_FB_SAGA';
export const LOGIN_FB = 'user/LOGIN_FB';
export const LOGIN_FB_SUCCESS = 'user/LOGIN_FB_SUCCESS';
export const LOGIN_FB_FAILURE = 'user/LOGIN_FB_FAILURE';

export const loginSaga = ({ username, password }) => ({
    type: LOGIN_SAGA,
    payload: {
        username,
        password
    }
});

export const loginSuccess = ({ username, email, token }) => ({
    type: LOGIN_SUCCESS,
    payload: {
        username,
        email,
        token
    }
});

export const logoutSaga = () => ({
    type: LOGOUT_SAGA
});

export const signupSaga = ({ username, email, password }) => ({
    type: SIGNUP_SAGA,
    payload: {
        username,
        email,
        password
    }
});

export const loginFBSaga = ({ authRes, userData }) => ({
    type: LOGIN_FB_SAGA,
    payload: {
        authRes,
        userData
    }
});
