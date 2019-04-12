import { StyleSheet } from 'react-native';

import colors from '../../color';

const styleSheet = StyleSheet.create({
	container: {
		minHeight: 44,
		borderRadius: 5,
		width: '20%',
		alignSelf: 'center',
		backgroundColor: colors.apple_two,
		marginTop: '10%',
		justifyContent: 'center'
	},
	text: {
		borderStyle: 'solid',
		borderColor: colors.apple_two,
		borderBottomWidth: 1,

		fontSize: 14,
		alignContent: 'center',
		alignSelf: 'center',
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'center',
		color: '#ffffff'
	}
});
export default function getStyleSheet(orientation) {
	return styleSheet;
}
