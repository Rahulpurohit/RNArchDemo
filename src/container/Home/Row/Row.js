import { Card, Thumbnail } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import colors from '../../../color';
const { height } = Dimensions.get('screen');
export default class Row extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps(nextProps) {}

	render() {
		const { avatar, name, year, color, pantone_value } = this.props;
		return (
			<Card style={[styles.container, { backgroundColor: color }]}>
				<Text style={{ color: 'white', fontSize: 24, marginLeft: 50, alignSelf: 'flex-start' }}>
					{this.props.index + 1}.
				</Text>
				<View style={{ flexDirection: 'row', width: '100%' }}>
					<View style={{ width: '100%', marginTop: 10, padding: 10 }}>
						<Text style={{ color: colors.white, fontSize: 22 }}>Name:{name.toUpperCase()}</Text>
						<Text style={{ color: colors.white }}>Color:{color}</Text>
						<Text style={{ color: colors.black }}>Year:{year}</Text>
						<Text style={{ color: colors.black }}>Pantone:{pantone_value}</Text>
					</View>
				</View>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: height * 0.33
	}
});
