import { all, put } from 'redux-saga/effects';
import { get } from 'lodash';
import { notification } from 'antd';

import userSaga from './user';

export function* callAPISaga({
    actionTypes: [requestType, successType, failureType],
    apiFunction,
    variable,
    success = {},
    failure = {}
}) {
    const {
        message: messageSuccess,
        description: descriptionSuccess,
        placement: placementSuccess = 'bottomLeft',
        type: typeSuccess = 'success',
        callback: callbackSuccess,
        duration: durationSuccess = 3.5
    } = success;
    const {
        message: messageFailure,
        description: descriptionFailure,
        placement: placementFailure = 'bottomLeft',
        type: typeFailure = 'error',
        useErrMsg,
        useDescMsg,
        callback: callbackFailure,
        duration: durationFailure = 3.5
    } = failure;
    try {
        yield put({
            type: requestType,
            payload: {
                ...variable
            }
        });
        const res = yield apiFunction(variable);
        const data = get(res, 'data');
        yield put({
            type: successType,
            payload: {
                ...data
            }
        });
        if (messageSuccess || descriptionSuccess) {
            notification[typeSuccess]({
                message: messageSuccess,
                description: descriptionSuccess,
                placement: placementSuccess,
                duration: durationSuccess
            });
        }
        if (callbackSuccess) {
            yield callbackSuccess();
        }
    } catch (err) {
        yield put({
            type: failureType,
            payload: {
                err
            }
        });
        const errRes = err.response;
        if (messageFailure || descriptionFailure || useErrMsg || useDescMsg) {
            const errMsg = get(errRes, 'data.message');
            notification[typeFailure]({
                message: useErrMsg ? errMsg : messageFailure,
                description: useDescMsg ? errMsg : descriptionFailure,
                placement: placementFailure,
                duration: durationFailure
            });
        }
        if (callbackFailure) {
            yield callbackFailure();
        }
    }
}

export default function* rootSaga() {
    yield all([
        userSaga()
    ]);
}
