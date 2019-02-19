import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class WeatherLoading extends Component {
	render() {
		return (
			<View>
				<Text style={styles.textStyle}> LOADING... </Text>
			</View>
		)
	}
}

export default WeatherLoading

const styles = StyleSheet.create(
	{
		textStyle: {
			fontSize: 30,
			color: 'blue'
		}
	}
)
