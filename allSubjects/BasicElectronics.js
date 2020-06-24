import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	FlatList,
	Linking,
	Button,
	TouchableNativeFeedback
} from 'react-native';
import firebase from 'firebase';
import quesPaper from '../models/quesPaper';

const BasicElectronics = (props) => {
	let resData;
	const loadedPapers = [];
	const testFunction = () => {
		firebase.database().ref('BasicElectronics/').on('value', (snapshot) => {
			resData = snapshot.val();

			for (const key in resData) {
				loadedPapers.push(new quesPaper(key, resData[key]));
			}
			// console.log(loadedPapers);
		});
	};

	testFunction();
	return (
		<View style={styles.container}>
			<FlatList
				data={loadedPapers}
				keyExtractor={(item) => item.link}
				renderItem={(itemData, index) => (
					<TouchableNativeFeedback
						onPress={() => {
							Linking.openURL(itemData.item.link);
						}}
					>
						<View style={styles.branch}>
							<Text>{itemData.item.name}</Text>
							<Button
								title="DOWNLOAD"
								color="black"
								onPress={() => {
									Linking.openURL(itemData.item.link);
								}}
							/>
						</View>
					</TouchableNativeFeedback>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 10
	},
	branch: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 40,
		margin: 10,
		fontSize: 20,
		fontWeight: '300',
		borderRadius: 10,
		elevation: 10,
		justifyContent: 'space-between'
	}
});

export default BasicElectronics;
