import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SubjectSelectScreen = (props) => {
	return <Text style={styles.text}>select your year</Text>;
};

const styles = StyleSheet.create({
	text: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default SubjectSelectScreen;
