'use strict';
export const FETCHING_LIST = 'FETCHING_LIST';
export const FETCHED_LIST_SUCCESS = 'FETCHED_LIST_SUCCESS';
export const FETCHED_LIST_FAILURE = 'FETCHED_LIST_FAILURE';

export function getList(action) {
	return {
		type: FETCHING_LIST,
		action: action
	};
}

export function getListSuccess(response) {
	return {
		type: FETCHED_LIST_SUCCESS,
		data: response
	};
}

export function getListFailure(error) {
	return {
		type: FETCHED_LIST_FAILURE,
		errorMessage: error
	};
}
