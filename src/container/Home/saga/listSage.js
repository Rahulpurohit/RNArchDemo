'use strict';

import { call, put, takeEvery, select } from 'redux-saga/effects';
import { FETCHING_LIST } from '../actions/listAction';
import { getListSuccess, getListFailure } from '../actions/listAction';

import getList from '../../../services/ListManager';

// ****************
// WORKERS
// ****************
function* workerList({ action }) {
	try {
		const response = yield call(getList, action);
		const state = yield select(state => state);
		if (state.listReducer.data) {
			response.data.data = response.data.data.concat(state.listReducer.data.data);
		}
		yield put(getListSuccess(response.data));
	} catch (e) {
		console.error(e);

		yield put(getListFailure(e));
		return;
	}
}

// ****************
// WATCHERS
// ****************

export default function* watcherList() {
	yield takeEvery(FETCHING_LIST, workerList);
}
