import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableNativeFeedback
} from 'react-native';

const BranchSelectScreen = (props) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('YearSelectCCE');
					}}
				>
					<View style={styles.branch}>
						<Text>Computer and Communication</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('YearSelect');
					}}
				>
					<View style={styles.branch}>
						<Text>Computer Science</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('YearSelect');
					}}
				>
					<View style={styles.branch}>
						<Text>Information Technology</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('YearSelect');
					}}
				>
					<View style={styles.branch}>
						<Text>Electronics and Communication</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		</ScrollView>
	);
};
BranchSelectScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Select Your Branch'
	};
};

const styles = StyleSheet.create({
	title: {
		fontWeight: '800',
		fontSize: 25,
		marginVertical: 10,
		padding: 15
	},
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
		fontWeight: '300',
		borderRadius: 10,
		elevation: 10
	}
});

export default BranchSelectScreen;
