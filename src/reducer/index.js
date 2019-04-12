import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import validationReducer from '../container/SignIn/reducer/validationReducer';
import listReducer from '../container/Home/reducer/listReducer';

export default combineReducers({
	UserReducer,
	validationReducer,
	listReducer
});
