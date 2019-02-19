import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	Button,
	Picker,
} from 'react-native'

import { connect } from 'react-redux'
import { getWeatherAction } from '../actions/weatherAction'

import WeatherLoading from '../components/WeatherLoading'
import BaseButton from '../components/BaseButton'

export class WeatherScreen extends Component {

	state = {
		city: '',
		tempUnit: 'C'
	}

	onTextChange = (text) => {
		this.setState({
			city: text
		})
	}

	onClickWeather() {
		const { getWeatherAction } = this.props
		getWeatherAction(this.state.city, this.state.tempUnit)
	}

	render() {
		const { temp, mess, isWeatherLoading, navigation } = this.props
		return (
			<View style={styles.container}>
				{(isWeatherLoading) ? (<WeatherLoading />) :
					(<Text
						style={styles.textStyle}
					>
						{mess} {this.state.city} {temp}
					</Text>)}
				<TextInput
					placeholder='Nhập tên thành phố'
					style={styles.textInputStyle}
					value={this.state.city}
					onChangeText={this.onTextChange}
				/>

				<View style={styles.tempUnitPickerStyle}>
					<Text style={styles.textStyle}>Đơn vị đo:</Text>
					<Picker
						selectedValue={this.state.tempUnit}
						style={{ height: 50, width: 100 }}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ tempUnit: itemValue })
						}>
						<Picker.Item label="Độ C" value="C" />
						<Picker.Item label="Độ F" value="F" />
						<Picker.Item label="Độ K" value="K" />
					</Picker>
				</View>

				<BaseButton
					buttonTitle='Chọn thành phố'
					onPressButton={() => this.onClickWeather()}
				/>
				<BaseButton
					buttonTitle='Xem thời tiết'
					onPressButton={() => {
						navigation.navigate('WeatherView', {
							city: this.state.city,
							temp: temp
						})
					}}
				/>
			</View>
		)
	}
}

function mapStatetoProps(state) {
	return {
		temp: state.weatherReducer.temp,
		mess: state.weatherReducer.mess,
		isWeatherLoading: state.weatherReducer.isGetting
	}
}

export default connect(mapStatetoProps, {
	getWeatherAction
})(WeatherScreen)

const styles = StyleSheet.create(
	{
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center'
		},
		textStyle: {
			fontSize: 20,
			fontWeight: 'bold',
			textAlign: 'center'
		},
		textInputStyle: {
			borderWidth: 1,
			margin: 10
		},
		tempUnitPickerStyle: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			height: 50,
			width: 100
		}
	}
)


