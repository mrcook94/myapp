import React, { Component } from 'react'
import {
	View,
	Button,
	StyleSheet,
} from 'react-native'

export class BaseButton extends Component {
	render() {
		return (
			<View style={styles.buttonContainer}>
				<Button
					title={this.props.buttonTitle}
					onPress={this.props.onPressButton}
				/>
			</View>
		)
	}
}

export default BaseButton

const styles = StyleSheet.create({
	buttonContainer: {
		margin: 10,
		width: 200,
		height: 50,
	}
})
