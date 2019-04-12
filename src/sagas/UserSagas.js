'use strict';

import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCHING_USER } from '../actions/UserActions';
import { getUserSuccess, getUserFailure } from '../actions/UserActions';

import { loginUser } from '../services/UserManager';

// ****************
// WORKERS
// ****************
function* workerLoginUser({ action }) {
	try {
		const response = yield call(loginUser, action);
		yield put(getUserSuccess(response.data));
	} catch (e) {
		yield put(getUserFailure(e));
		return;
	}
}

// ****************
// WATCHERS
// ****************

const watcherLoginUser = function*() {
	yield takeEvery(FETCHING_USER, workerLoginUser);
};

module.exports = {
	watcherLoginUser
};
