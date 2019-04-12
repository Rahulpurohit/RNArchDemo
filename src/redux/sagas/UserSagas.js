'use strict';

import { call, put, take, fork, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { FETCHING_USER } from '../actions/actionsTypes';
import { getUserSuccess, getUserFailure } from '../actions/UserActions';

import { UserManager } from '../../services/';

// ****************
// WORKERS
// ****************
function* workerLoginUser({ action }) {
	try {
		const response = yield call(UserManager.loginUser, action);
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
