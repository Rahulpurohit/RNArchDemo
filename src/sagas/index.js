import { all, fork, takeEvery } from 'redux-saga/effects';
import { watcherLoginUser } from './UserSagas';
import watcherLoginForm from '../container/SignIn/saga/validationSaga';
import watcherList from '../container/Home/saga/listSage';

export default function* rootSaga() {
	yield all([fork(watcherLoginUser), watcherLoginForm(), watcherList()]);
}
