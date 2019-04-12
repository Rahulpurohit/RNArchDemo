import { connect } from 'react-redux';
import { Splash } from './Splash';

export default connect(
	state => {
		return {
			isLogin: state.UserReducer.data ? !!state.UserReducer.data.token : false
		};
	},
	null
)(Splash);
