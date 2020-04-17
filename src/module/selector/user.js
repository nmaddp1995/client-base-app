import { createSelector } from 'reselect';
import { get } from 'lodash';

import { namespace } from '../reducer/user';

export const selectUser = (state) => state[namespace];
export const selectUserLogged = createSelector(
    selectUser,
    (user) => get(user, 'logged')
);
