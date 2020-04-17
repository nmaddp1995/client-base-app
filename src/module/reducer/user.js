import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../action/user';


const defaultState = {
    logged: false
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            const { token, ...userData } = action.payload;
            return {
                logged: true,
                ...userData
            };
        case LOGOUT_SUCCESS:
            return defaultState;
        default:
            return state;
    }
};

export const namespace = 'user';

export default userReducer;
