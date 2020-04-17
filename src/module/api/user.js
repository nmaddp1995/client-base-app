import axios from 'axios';

import { URL_API_USER } from '.';

export const loginAPI = ({ username, password }) => {
    return axios.post(`${URL_API_USER}/login`, {
        username,
        password
    });
};

export const signupAPI = ({ username, email, password }) => {
    return axios.post(`${URL_API_USER}/signup`, {
        username,
        email,
        password
    });
};

export const logoutApi = () => {
    return {};
}