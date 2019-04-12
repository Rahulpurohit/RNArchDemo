import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import getStyle from './style';
export class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const styles = getStyle();
		const { running } = this.props;
		return (
			<TouchableOpacity onPress={running ? null : this.props.onPress} style={styles.container} {...this.props}>
				{!running && <Text style={styles.text}> {this.props.children} </Text>}
				{running && <ActivityIndicator />}
			</TouchableOpacity>
		);
	}
}
