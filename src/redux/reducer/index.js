import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import reducer from '../../container/SignIn/reducer/reducer';
export default combineReducers({
	UserReducer,
	reducer
});
