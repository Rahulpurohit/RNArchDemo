import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import debounce from 'lodash/debounce';
import noop from 'lodash/noop';
import getStyle from './style';
export class SmartTextInput extends Component {
	constructor(props) {
		super(props);
		this.handleDebouncedInput =
			this.props.validateOn === 'debouncedInput' ? debounce(this.handleValidate.bind(this), 300) : noop;
	}
	handleChange(text) {
		const { name } = this.props;
		this.props.onChange(name, text.nativeEvent.text);
		this.handleDebouncedInput();
		this.handleBlur();
	}
	handleBlur() {
		if (this.props.validateOn === 'blur') {
			return this.handleValidate();
		}
	}
	handleValidate() {
		const { name, onValidate, validation } = this.props;
		return onValidate(name, validation);
	}
	render() {
		const styles = getStyle();
		const { labelTitle, placeHolder } = this.props;
		const { ...extraProps } = this.props;
		const { errors } = this.props;
		const hasErrors = errors && errors.length > 0;
		return (
			<View style={styles.container}>
				<Text style={styles.labelStyle}>{labelTitle}</Text>
				<TextInput
					blurOnSubmit
					{...extraProps}
					style={[styles.textArea, styles.textAreaLabel, extraProps.style]}
					multiline={false}
					placeHolder={placeHolder}
					onChange={this.handleChange.bind(this)}
					onSubmitEditing={this.handleBlur.bind(this)}
					underlineColorAndroid={'transparent'}
				/>
				{hasErrors && errors.map(e => <Text style={styles.errorMessage}>{e}</Text>)}
			</View>
		);
	}
}
