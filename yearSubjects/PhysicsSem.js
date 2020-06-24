import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	ScrollView,
	TouchableNativeFeedback,
	Linking
} from 'react-native';

const PhysicsSem = (props) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableNativeFeedback
					onPress={() => {
						props.navigation.navigate('BasicElectronics');
					}}
				>
					<View style={styles.branch}>
						<Text>Basic Electronics</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Environmental Studies</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Mechanics of Solids</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Engineering Graphics</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Engineering Mathematics I</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.branch}>
						<Text>Engineering Physics</Text>
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

export default PhysicsSem;
