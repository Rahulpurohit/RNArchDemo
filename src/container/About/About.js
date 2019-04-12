import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ color: 'black' }}> About This App </Text>
			</View>
		);
	}
}
