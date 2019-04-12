import { connect } from 'react-redux';

import { getList } from './actions/listAction';
import { Home } from './Home';

export const validations = {
	email: 'email',
	password: ['minLength:6', 'doesNotMatch:password']
};

function mapDispatchToProps(dispatch, ownProps) {
	return {
		// We'll have each field call the `onChange` handler with its own
		// field name and new value
		getList: function(field) {
			return dispatch(getList(field));
		}
	};
}

// For this example, just connect the Root component to the entire state
export default connect(
	state => {
		return {
			list: state.listReducer
		};
	},
	mapDispatchToProps
)(Home);
