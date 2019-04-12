'use strict';

import { FETCHING_USER, FETCHED_USER_SUCCESS, FETCHED_USER_FAILURE } from '../actions/UserActions';

const initialState = {
	data: null,
	isFetching: false,
	fetched: false,
	error: null
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_USER:
			return {
				...state,
				isFetching: true,
				data: null,
				fetched: false
			};
		case FETCHED_USER_SUCCESS:
			return {
				...state,
				data: action.data,
				isFetching: false,
				fetched: true,
				error: null
			};
		case FETCHED_USER_FAILURE:
			return {
				...state,
				isFetching: false,
				fetched: true,
				error: action.errorMessage
			};
		default:
			return state;
	}
}
