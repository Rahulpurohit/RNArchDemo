'use strict';
export const FETCHING_USER = 'FETCHING_USER';
export const FETCHED_USER_SUCCESS = 'FETCHED_USER_SUCCESS';
export const FETCHED_USER_FAILURE = 'FETCHED_USER_FAILURE';

export function getUser(action) {
	return {
		type: FETCHING_USER,
		action: action
	};
}

export function getUserSuccess(response) {
	return {
		type: FETCHED_USER_SUCCESS,
		data: response
	};
}

export function getUserFailure(error) {
	return {
		type: FETCHED_USER_FAILURE,
		errorMessage: error
	};
}
