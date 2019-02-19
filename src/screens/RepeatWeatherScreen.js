import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
} from 'react-native'

class RepeatWeatherScreen extends Component {
	render() {
		const { navigation } = this.props
		const city = navigation.getParam('city', 'none')
		const temp = navigation.getParam('temp', 'temp none')
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}> Nhiệt độ ở {city} hiện tại là: </Text>
				<Text style={styles.textStyle}>{temp}</Text>
			</View>
		)
	}
}

export default RepeatWeatherScreen

const styles = StyleSheet.create(
	{
		container: {
			flex: 1,
			justifyContent: 'center'
		},
		textStyle: {
			fontSize: 20,
			textAlign: 'center'
		}
	}
)
