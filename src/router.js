import React from 'react';
import { Platform, StatusBar, View, ActivityIndicator } from 'react-native';
import {
	createBottomTabNavigator,
	createAppContainer,
	createStackNavigator,
	createSwitchNavigator
} from 'react-navigation';
import { connect } from 'react-redux';

import SignIn from './container/SignIn';
import Home from './container/Home/';
import About from './container/About';
import Splash from './container/Splash/';

const headerStyle = {
	marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			title: 'Sign In',
			headerStyle
		}
	}
});

export const SignedIn = createBottomTabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'Home'
			}
		},
		Profile: {
			screen: About,
			navigationOptions: {
				tabBarLabel: 'About'
			}
		}
	},
	{
		tabBarOptions: {
			style: {
				paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
			}
		}
	}
);
const AppContainer = createAppContainer(
	createSwitchNavigator(
		{ App: SignedIn, Auth: SignedOut },
		{
			initialRouteName: 'Auth'
		}
	)
);
export default AppContainer;
