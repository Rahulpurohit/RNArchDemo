'use strict';

import { FETCHING_LIST, FETCHED_LIST_SUCCESS, FETCHED_LIST_FAILURE } from '../actions/listAction';

const initialState = {
	data: null,
	isFetching: false,
	fetched: false,
	error: null
};

export default function listReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_LIST:
			return {
				...state,
				isFetching: true,
				fetched: false
			};
		case FETCHED_LIST_SUCCESS:
			return {
				...state,
				data: action.data,
				isFetching: false,
				fetched: true,
				error: null
			};
		case FETCHED_LIST_FAILURE:
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
