import { StyleSheet } from 'react-native';

import colors from '../../color';

const styleSheet = StyleSheet.create({
	container: {
		paddingHorizontal: '9%',
		width: '100%'
	},
	textArea: {
		borderStyle: 'solid',
		borderColor: colors.apple_two,
		borderBottomWidth: 1,
		width: '100%'
	},
	labelStyle: {
		fontSize: 12,
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'left',
		color: colors.dark_grey
	},
	textAreaLabel: {
		fontSize: 16,
		fontWeight: 'bold',
		fontStyle: 'normal',
		lineHeight: 24,
		letterSpacing: 0,
		textAlign: 'left',
		color: colors.dark_grey
	},
	errorMessage: {
		color: 'firebrick',
		fontSize: 12
	}
});
export default function getStyleSheet(orientation) {
	return styleSheet;
}
