import React, { Component } from 'react';
import { View, Text } from 'react-native';
import colors from '../../color';
export class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.navigation.navigate(this.props.isLogin ? 'App' : 'Auth');
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: colors.apple_two }}>
				<Text> Loading.... </Text>
			</View>
		);
	}
}
