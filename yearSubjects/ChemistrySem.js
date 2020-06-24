import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	ScrollView,
	TouchableNativeFeedback
} from 'react-native';

const ChemistrySem = (props) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Programming in C</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Engineering Chemistry</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Basic Electrical Technology</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Technical Communication</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Engineering Thermodynamics</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>History</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Engineering Mathematics II</Text>
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

export default ChemistrySem;
