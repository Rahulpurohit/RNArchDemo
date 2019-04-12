import { connect } from 'react-redux';

import { changeValue, validate, submit } from './actions/validationActions';
import { getUser } from '../../actions/UserActions';
import { SignIn } from './SignIn';

export const validations = {
	email: 'email',
	password: ['minLength:6', 'doesNotMatch:password']
};

function mapDispatchToProps(dispatch, ownProps) {
	return {
		// We'll have each field call the `onChange` handler with its own
		// field name and new value
		onChange: function(field, value) {
			return dispatch(changeValue(field, value));
		},

		// Each field will call the `onValidate` prop whenever it wants to
		// validate.  This will let the fields decide how and when they want to
		// validate themselves.
		onValidate: (field, validation) => dispatch(validate(field, validation)),

		// This is a curried function that takes the final submit function that
		// the component wants to call _after_ the fields have been validated
		onSubmit: handler => e => {
			return dispatch(submit(validations, handler));
		},
		getUser: obj => dispatch(getUser({ obj }))
	};
}

// For this example, just connect the Root component to the entire state
export default connect(
	state => {
		return {
			validationReducer: state.validationReducer,
			userReducer: state.UserReducer,
			isLogin: state.UserReducer.data ? !!state.UserReducer.data.token : false
		};
	},
	mapDispatchToProps
)(SignIn);
