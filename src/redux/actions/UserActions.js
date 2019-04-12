import * as actionTypes from './actionsTypes';

export function getUser(action) {
	return {
		type: actionTypes.FETCHING_USER,
		action: action
	};
}

export function getUserSuccess(response) {
	return {
		type: actionTypes.FETCHED_USER_SUCCESS,
		data: response
	};
}

export function getUserFailure(error) {
	return {
		type: actionTypes.FETCHED_USER_FAILURE,
		errorMessage: error
	};
}
