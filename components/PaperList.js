import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	Linking,
	Button,
	TouchableNativeFeedback
} from 'react-native';

const PaperList = (props) => {
	return (
		<TouchableNativeFeedback
			onPress={() => {
				Linking.openURL(props.linkName);
			}}
		>
			<View style={styles.branch}>
				<Text>{props.paperName}</Text>
				<Button
					title="DOWNLOAD"
					color="black"
					onPress={() => {
						Linking.openURL(props.linkName);
					}}
				/>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginVertical: 10
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

export default PaperList;
