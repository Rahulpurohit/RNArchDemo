'use strict';
import APIManager from './APIManager';
import { LIST } from './EndPoints';

export default function getList(params) {
	return APIManager.get(LIST.LIST, params ? params : null);
}
