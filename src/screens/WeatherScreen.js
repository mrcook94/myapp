import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native'

import { connect } from 'react-redux'
import { getWeatherAction } from '../actions/weatherAction'

import WeatherLoading from '../components/WeatherLoading'

export class WeatherScreen extends Component {

  state = {
    city: ''
  }

  onTextChange = (text) => {
    this.setState({
      city: text
    })
  }

  onClickWeather() {
    const { getWeatherAction } = this.props
    getWeatherAction(this.state.city)
  }

  render() {
    const { temp, mess, isWeatherLoading } = this.props
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

        <Button
          title='Xem nhiệt độ'
          onPress={this.onClickWeather.bind(this)}
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
      borderRadius: 0.8,
    }
  }
)


