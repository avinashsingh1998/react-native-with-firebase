import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	ScrollView,
	TouchableNativeFeedback
} from 'react-native';

const YearSelectScreen = (props) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('FirstCCE');
					}}
				>
					<View style={styles.branch}>
						<Text>1st YEAR</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('SecondCCE');
					}}
				>
					<View style={styles.branch}>
						<Text>2nd YEAR</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('ThirdCCE');
					}}
				>
					<View style={styles.branch}>
						<Text>3rd YEAR</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('FourthCCE');
					}}
				>
					<View style={styles.branch}>
						<Text>4th YEAR</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginVertical: 30
	},
	branch: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 40,
		margin: 10,
		fontSize: 20,
		fontWeight: '600',
		borderRadius: 10,
		elevation: 10
	}
});

export default YearSelectScreen;
