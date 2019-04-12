import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SmartTextInput as TextInput } from '../../component/SmartTextInput/SmartTextInput';
import { validations } from './index';
import Button from '../../component/Button';
import colors from '../../color';
export class SignIn extends Component {
	constructor(props) {
		super(props);
		this._bootstrapAsync();
	}

	_bootstrapAsync = () => {
		// This will switch to the App screen or Auth screen and this loading
		// screen will be unmounted and thrown away.
		this.props.isLogin && this.props.navigation.navigate('App');
	};
	componentWillReceiveProps(nextProps) {
		nextProps.isLogin && this.props.navigation.navigate('App');
	}
	handleSubmit(values) {
		return new Promise(resolve =>
			setTimeout(() => {
				resolve();
				this.setState({ data: values });
				this.props.getUser(values);
			}, 500)
		);
	}
	render() {
		const { onChange, onSubmit, onValidate } = this.props;
		const { submitting, valid } = this.props.validationReducer;
		const { email, password } = this.props.validationReducer.fields;
		const buttonCopy = submitting ? 'Submitting...' : 'Submit';

		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text style={{ fontSize: 30, color: colors.denim_blue, alignSelf: 'center', marginBottom: 10 }}>
					Login Page
				</Text>
				{!!this.props.isLogin && (
					<Text style={{ fontSize: 10, color: colors.dark_grey, alignSelf: 'center', marginBottom: 10 }}>
						Login AuthToken :{this.props.userReducer.data.token}
					</Text>
				)}

				<TextInput
					name="email"
					onChange={onChange}
					onValidate={onValidate}
					validateOn="blur"
					validation={validations.email}
					labelTitle={'Email'}
					placeHolder={'Email'}
					{...email}
				/>
				{
					<TextInput
						name="password"
						onChange={onChange}
						onValidate={onValidate}
						validateOn="blur"
						validation={validations.password}
						labelTitle={'Password'}
						placeHolder={'password'}
						{...password}
						secureTextEntry={true}
					/>
				}
				<Button
					running={submitting || this.props.userReducer.isFetching}
					disabled={submitting || !valid || this.props.userReducer.isFetching}
					onPress={onSubmit(this.handleSubmit.bind(this))}
				>
					{buttonCopy}
				</Button>
			</View>
		);
	}
}
