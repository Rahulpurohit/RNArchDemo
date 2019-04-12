'use strict';

import APIManager from './APIManager';
import { USER } from './EndPoints';

export function loginUser(params) {
	return APIManager.postHandle(USER.LOGIN, params.obj);
}

// export function registerUser(params) {
// 	return APIManager.getHandle(USER.REGISTER, params.obj);
// }
