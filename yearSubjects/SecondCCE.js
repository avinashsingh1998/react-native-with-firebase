import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	ScrollView,
	TouchableNativeFeedback
} from 'react-native';

const SecondCCE = (props) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('COA');
					}}
				>
					<View style={styles.branch}>
						<Text>Computer Organization and architecture - 3rd sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('STLD');
					}}
				>
					<View style={styles.branch}>
						<Text>Switching Theory and Logic Design - 3rd sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Data Structures - 3rd sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>OOPS using Java - 3rd sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Engineering Mathematics III - 3rd sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Relational Database Management System - 4th sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Microprocessors and Microcontrolers - 4th sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Operating Systems - 4th sem</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Engineering Mathematics IV - 4th sem</Text>
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

export default SecondCCE;
