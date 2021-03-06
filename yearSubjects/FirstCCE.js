import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	ScrollView,
	TouchableNativeFeedback
} from 'react-native';

const FirstCCE = (props) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('PhysicsSem');
					}}
				>
					<View style={styles.branch}>
						<Text>Physics semester</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('ChemistrySem');
					}}
				>
					<View style={styles.branch}>
						<Text>Chemistry semester</Text>
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

export default FirstCCE;
