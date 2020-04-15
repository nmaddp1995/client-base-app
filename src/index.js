import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './module/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import './index.scss';
import * as serviceWorker from './serviceWorker';
import Login from './page/Login';

ReactDOM.render(
    <Provider store={store}>
        <Login />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
