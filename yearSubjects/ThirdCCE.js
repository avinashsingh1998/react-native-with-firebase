import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	ScrollView,
	TouchableNativeFeedback
} from 'react-native';

const ThirdCCE = (props) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Cryptography and Security - 5th sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Formal Language and Automata Theory - 5th sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Web Technologies - 5th sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Design and Analysis of Algorithms - 5th sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Data Communication - 5th sem</Text>
					</View>
				</TouchableNativeFeedback>

				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Linux System and Shell programming - 5th sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Computer Networks - 6th sem</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		</ScrollView>
	);
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
		marginVertical: 10
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

export default ThirdCCE;
