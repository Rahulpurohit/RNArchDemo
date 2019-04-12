'use strict';

import * as actionTypes from '../actions/actionsTypes';

const initialState = {
	data: null,
	isFetching: false,
	fetched: false,
	error: null
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCHING_USER:
			return {
				...state,
				isFetching: true,
				data: null,
				fetched: false
			};
		case actionTypes.FETCHED_USER_SUCCESS:
			return {
				...state,
				data: action.data,
				isFetching: false,
				fetched: true,
				error: null
			};
		case actionTypes.FETCHED_USER_FAILURE:
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
