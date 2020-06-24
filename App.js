import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';

import ScreenNavigator from './navigation/AppNavigator';

if (!firebase.apps.length) {
	firebase.initializeApp(ApiKeys.FirebaseConfig);
}

export default function App() {
	return <ScreenNavigator />;
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1
// 	}
// });
